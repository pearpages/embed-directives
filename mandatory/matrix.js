(function() {
    'use strict';

    angular.module("mandatory")
        .constant('Matrix', function(istf, uwwkt, uwAuthAgreement, accountHistory, quote, binder, primaryPolicySlip, ulPolicySlip, hccPolicySlip, endt, warrantyStatement, applicationForm, nda, submissionSubmary, advice, facoutUwAuthAgreement, facoutRational, facoutReinsuranceBinder, facoutSlip, facoutEndt) {

            if (arguments.length !== 20) {
                throw "Matrix Object expects 20 arguments";
            }

            this.uwDoc = {
                description: 'UW Doc',
                data: {}
            };
            this.policyDoc = {
                description: 'Policy Doc',
                data: {}
            };
            this.crossSelling = {
                description: 'Cross Selling',
                data: {}
            };
            this.facout = {
                description: 'Fac Out',
                data: {}
            };

            this.uwDoc.data.istf = {
                description: 'ISTF',
                value: istf
            };
            this.uwDoc.data.uwwkt = {
                description: 'UW WKT',
                value: uwwkt
            };
            this.uwDoc.data.uwAuthAgreement = {
                description: 'UW Auth',
                value: uwAuthAgreement
            };
            this.uwDoc.data.accountHistory = {
                description: 'Account History',
                value: accountHistory
            };

            this.policyDoc.data.quote = {
                description: 'Quote',
                value: quote
            };
            this.policyDoc.data.binder = {
                description: 'Binder',
                value: binder
            };
            this.policyDoc.data.primaryPolicySlip = {
                description: 'Primary Policy/Slip',
                value: primaryPolicySlip
            };
            this.policyDoc.data.ulPolicySlip = {
                description: 'UL Policy/Slip',
                value: ulPolicySlip
            };
            this.policyDoc.data.hccPolicySlip = {
                description: 'HCC Policy/Slip',
                value: hccPolicySlip
            };
            this.policyDoc.data.endt = {
                description: 'Endt',
                value: endt
            };
            this.policyDoc.data.warrantyStatement = {
                description: 'Warranty Statement',
                value: warrantyStatement
            };
            this.policyDoc.data.applicationForm = {
                description: 'Application Form',
                value: applicationForm
            };
            this.policyDoc.data.nda = {
                description: 'NDA (If applicable',
                value: nda
            };

            this.crossSelling.data.submissionSubmary = {
                description: 'Summary',
                value: submissionSubmary
            };
            this.crossSelling.data.advice = {
                description: 'Advice',
                value: advice
            };

            this.facout.data.facoutUwAuthAgreement = {
                description: 'Fac Out UW Auth. Agreement',
                value: facoutUwAuthAgreement
            };
            this.facout.data.facoutRational = {
                description: 'Fac Out Rational',
                value: facoutRational
            };
            this.facout.data.facoutReinsuranceBinder = {
                description: 'Fac Out Reinsurance Binder',
                value: facoutReinsuranceBinder
            };
            this.facout.data.facoutSlip = {
                description: 'Fac Out Slip',
                value: facoutSlip
            };
            this.facout.data.facoutEndt = {
                description: 'Fac Out Endt',
                value: facoutEndt
            };
        });

})();
