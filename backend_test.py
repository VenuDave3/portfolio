#!/usr/bin/env python3
"""
Backend API Testing for Venu Dave's Portfolio Contact Form
Tests the contact form API endpoints as specified in the review request.
"""

import requests
import json
import sys
from typing import Dict, Any

# Use the production backend URL from frontend/.env
BACKEND_URL = "https://hire-me-dev-3.preview.emergentagent.com/api"

def test_api_endpoint(method: str, endpoint: str, data: Dict[Any, Any] = None, expected_status: int = 200) -> Dict[str, Any]:
    """Test an API endpoint and return the result"""
    url = f"{BACKEND_URL}{endpoint}"
    
    try:
        if method.upper() == "GET":
            response = requests.get(url, timeout=10)
        elif method.upper() == "POST":
            response = requests.post(url, json=data, timeout=10)
        else:
            return {"success": False, "error": f"Unsupported method: {method}"}
        
        result = {
            "success": response.status_code == expected_status,
            "status_code": response.status_code,
            "expected_status": expected_status,
            "url": url,
            "method": method.upper()
        }
        
        try:
            result["response_data"] = response.json()
        except:
            result["response_data"] = response.text
            
        return result
        
    except requests.exceptions.RequestException as e:
        return {
            "success": False,
            "error": str(e),
            "url": url,
            "method": method.upper()
        }

def run_contact_form_tests():
    """Run all contact form API tests as specified in the review request"""
    
    print("=" * 80)
    print("TESTING VENU DAVE'S PORTFOLIO CONTACT FORM API")
    print("=" * 80)
    print(f"Backend URL: {BACKEND_URL}")
    print()
    
    test_results = []
    
    # Test 1: Health check
    print("Test 1: GET /api/ - Health check")
    print("-" * 40)
    result = test_api_endpoint("GET", "/", expected_status=200)
    test_results.append(("Health Check", result))
    
    if result["success"]:
        print("✅ PASSED: Health check successful")
        print(f"   Response: {result['response_data']}")
    else:
        print("❌ FAILED: Health check failed")
        print(f"   Status: {result.get('status_code', 'N/A')} (expected 200)")
        print(f"   Error: {result.get('error', 'Unknown error')}")
    print()
    
    # Test 2: Valid contact form submission
    print("Test 2: POST /api/contact - Valid submission")
    print("-" * 40)
    valid_data = {
        "name": "Test Recruiter",
        "email": "recruiter@google.com", 
        "company": "Google",
        "message": "Interested in discussing SDE roles"
    }
    result = test_api_endpoint("POST", "/contact", data=valid_data, expected_status=201)
    test_results.append(("Valid Contact Submission", result))
    
    if result["success"]:
        print("✅ PASSED: Valid contact form submission")
        response_data = result['response_data']
        if isinstance(response_data, dict):
            print(f"   ID: {response_data.get('id', 'N/A')}")
            print(f"   Success: {response_data.get('success', 'N/A')}")
            print(f"   Message: {response_data.get('message', 'N/A')}")
        else:
            print(f"   Response: {response_data}")
    else:
        print("❌ FAILED: Valid contact form submission failed")
        print(f"   Status: {result.get('status_code', 'N/A')} (expected 201)")
        print(f"   Error: {result.get('error', 'Unknown error')}")
    print()
    
    # Test 3: Contact form without company (optional field)
    print("Test 3: POST /api/contact - Without company (optional field)")
    print("-" * 40)
    no_company_data = {
        "name": "Jane Doe",
        "email": "jane@example.com",
        "message": "Quick question about your projects"
    }
    result = test_api_endpoint("POST", "/contact", data=no_company_data, expected_status=201)
    test_results.append(("Contact Without Company", result))
    
    if result["success"]:
        print("✅ PASSED: Contact form without company field")
        response_data = result['response_data']
        if isinstance(response_data, dict):
            print(f"   ID: {response_data.get('id', 'N/A')}")
            print(f"   Success: {response_data.get('success', 'N/A')}")
            print(f"   Message: {response_data.get('message', 'N/A')}")
    else:
        print("❌ FAILED: Contact form without company failed")
        print(f"   Status: {result.get('status_code', 'N/A')} (expected 201)")
        print(f"   Error: {result.get('error', 'Unknown error')}")
    print()
    
    # Test 4: Invalid email validation
    print("Test 4: POST /api/contact - Invalid email")
    print("-" * 40)
    invalid_email_data = {
        "name": "Test",
        "email": "invalid-email",
        "message": "Test message"
    }
    result = test_api_endpoint("POST", "/contact", data=invalid_email_data, expected_status=422)
    test_results.append(("Invalid Email Validation", result))
    
    if result["success"]:
        print("✅ PASSED: Invalid email properly rejected")
        print(f"   Response: {result['response_data']}")
    else:
        print("❌ FAILED: Invalid email validation failed")
        print(f"   Status: {result.get('status_code', 'N/A')} (expected 422)")
        print(f"   Response: {result.get('response_data', 'N/A')}")
    print()
    
    # Test 5: Missing required fields
    print("Test 5: POST /api/contact - Missing required fields")
    print("-" * 40)
    missing_fields_data = {
        "name": "Test"
    }
    result = test_api_endpoint("POST", "/contact", data=missing_fields_data, expected_status=422)
    test_results.append(("Missing Required Fields", result))
    
    if result["success"]:
        print("✅ PASSED: Missing required fields properly rejected")
        print(f"   Response: {result['response_data']}")
    else:
        print("❌ FAILED: Missing required fields validation failed")
        print(f"   Status: {result.get('status_code', 'N/A')} (expected 422)")
        print(f"   Response: {result.get('response_data', 'N/A')}")
    print()
    
    # Test 6: Retrieve contact messages
    print("Test 6: GET /api/contact - Retrieve messages")
    print("-" * 40)
    result = test_api_endpoint("GET", "/contact", expected_status=200)
    test_results.append(("Retrieve Contact Messages", result))
    
    if result["success"]:
        print("✅ PASSED: Contact messages retrieved successfully")
        response_data = result['response_data']
        if isinstance(response_data, list):
            print(f"   Number of messages: {len(response_data)}")
            if len(response_data) > 0:
                print(f"   Latest message from: {response_data[0].get('name', 'N/A')}")
        else:
            print(f"   Response: {response_data}")
    else:
        print("❌ FAILED: Contact messages retrieval failed")
        print(f"   Status: {result.get('status_code', 'N/A')} (expected 200)")
        print(f"   Error: {result.get('error', 'Unknown error')}")
    print()
    
    # Summary
    print("=" * 80)
    print("TEST SUMMARY")
    print("=" * 80)
    
    passed_tests = sum(1 for _, result in test_results if result["success"])
    total_tests = len(test_results)
    
    for test_name, result in test_results:
        status = "✅ PASSED" if result["success"] else "❌ FAILED"
        print(f"{status}: {test_name}")
    
    print()
    print(f"OVERALL RESULT: {passed_tests}/{total_tests} tests passed")
    
    if passed_tests == total_tests:
        print("🎉 ALL TESTS PASSED! Contact form API is working correctly.")
        return True
    else:
        print("⚠️  SOME TESTS FAILED. Please check the issues above.")
        return False

if __name__ == "__main__":
    success = run_contact_form_tests()
    sys.exit(0 if success else 1)