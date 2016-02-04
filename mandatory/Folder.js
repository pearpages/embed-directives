(function() {
    'use strict';

    angular.module("mandatory")
        .value('Folder', Folder);

    function Folder() {

        this.files = {
            "uwDoc": {
                "istf": [],
                "uwwkt": [],
                "uwAuthAgreement": [],
                "accountHistory": []
            },
            "policyDoc": {
                "quote": [],
                "binder": [],
                "primaryPolicySlip": [],
                "ulPolicySlip": [],
                "hccPolicySlip": [],
                "endt": [],
                "warrantyStatement": [],
                "applicationForm": [],
                "nda": []
            },
            "crossSelling": {
                "submissionSubmary": [],
                "advice": []
            },
            "facout": {
                "facoutUwAuthAgreement": [],
                "facoutRational": [],
                "facoutReinsuranceBinder": [],
                "facoutSlip": [],
                "facoutEndt": []
            }
        };
    }
})();
