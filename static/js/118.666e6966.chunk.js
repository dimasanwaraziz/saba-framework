(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[118],{507:function(e){e.exports=JSON.parse('{"pageType":"crud","pageTitle":"Users","pageModuleTitle":"App","crudOpt":{"endpointName":"api/user","baseUrl":"sso","getApiSummaryData":false,"serverSideGrid":true,"detailPage":false,"detailPageModalSize":"lg","detailPageFieldTitle":["name"],"detailPageFieldTitleSeparator":[" "],"detailFromGrid":true,"getAlwaysGrid":false,"deleteSelection":false,"getApiAfterPut":false,"getApiAfterUpload":true,"getApiAfterPost":false,"getApiAfterDelete":false,"disabledEdit":false,"disabledAdd":false,"disabledDelete":false,"data":{"dynamicColumns":[{"fieldName":"name","columnName":"User","type":"avatar_title","avatarTitleField":["name"],"avatarDescField":"email","avatarImgField":"avatar","clickToEdit":true,"minWidth":"210px"},{"fieldName":"role_name","columnName":"Role","type":"badge","color":"light-info","clickToLink":true,"clickToLinkUrl":"/dyn_pages/_admin_/role/edit","clickToLinkFieldId":"id_role","sortable":false},{"fieldName":"unit_name","columnName":"Unit","sortable":false},{"fieldName":"name_employee","columnName":"Employee","showIf":[{"fieldName":"id_app.setting.user_employee_mapping","operator":"===","value":"true"}]},{"fieldName":"approvalLineName","columnName":"Approval Line","showIf":[{"fieldName":"id_app.setting.user_employee_mapping","operator":"===","value":"true"}]},{"fieldName":"isManager","columnName":"Manager","lookupValue":[{"value":true,"label":"","icon":"material:verified","class":"text-warning"}],"minWidth":"100px","center":true,"showIf":[{"fieldName":"id_app.setting.user_employee_mapping","operator":"===","value":"true"}]},{"fieldName":"blockCount","columnName":"Block","type":"badge","color":"danger","center":true}],"dynamicColumnsFilter":[{"fieldName":"id_app","fieldLabel":"App","type":"dropdown","dataFrom":{"api":"api/app?length=200","resp_key":"data","baseUrl":"sso","field_label":["name","info.appType"],"field_value":"id","field_img":"logo.appLogo","field_label_separator":" ~~~ ","api_getAlways":false},"rules":{"required":true}},{"fieldName":"id_unit_app","fieldLabel":"Domain","type":"dropdown","dataFrom":{"api":"api/unit_app?length=200&sort=domain","resp_key":"data","baseUrl":"sso","field_label":"domain","field_value":"id","api_getAlways":false,"get_params":[{"key":"id_app","value":"id_app","valueFrom":"other"}]},"showIf":[{"fieldName":"id_app"}],"rules":{"required":true}},{"fieldName":"filter_unit","hideOptionsCodeField":true,"fieldLabel":"Unit","type":"dropdown","dataFrom":{"api":"api/unit?flat_mode=true","resp_key":"data","baseUrl":"sso","field_label":"name","field_value":"id","api_getAlways":false,"get_params":[{"key":"id_unit_app","value":"id_unit_app","valueFrom":"other"}]},"showIf":[{"fieldName":"id_unit_app"}]},{"fieldName":"id_role","hideOptionsCodeField":true,"fieldLabel":"Role","type":"dropdown","field_label":["name"],"apiParamsName":"filter_role","dataFrom":{"api":"api/role?mode=summary","resp_key":"data","baseUrl":"sso","field_label":["name"],"field_value":"id","field_label_separator":" - ","api_getAlways":false,"get_params":[{"key":"id_app","value":"id_app","valueFrom":"other"}]},"showIf":[{"fieldName":"id_unit_app"}]}],"dynamicForm":[{"type":"column","size":9,"children":[{"fieldName":"id_app","fieldLabel":"App","size":6,"type":"dropdown","dataFrom":{"api":"api/app?length=200","resp_key":"data","baseUrl":"sso","field_label":["name","info.appType"],"field_value":"id","field_img":"logo.appLogo","field_label_separator":" ~~~ ","api_getAlways":false},"includeOnPayload":false,"isHidden":false,"isDisabled":true,"initialValueFromFilter":true,"rules":{"required":true}},{"fieldName":"id_unit_app","fieldLabel":"Domain","type":"dropdown","size":6,"dataFrom":{"api":"api/unit_app?length=200&sort=domain","resp_key":"data","baseUrl":"sso","field_label":"domain","field_value":"id","api_getAlways":false,"get_params":[{"key":"id_app","value":"id_app","valueFrom":"other"}]},"showIf":[{"fieldName":"id_app"}],"rules":{"required":true},"includeOnPayload":false,"isHidden":false,"isDisabled":true,"initialValueFromFilter":true},{"fieldName":"username","size":6,"rules":{"required":true,"pattern":{"value":"/^\\\\S*$/","message":"not allowed space"},"maxLength":{"value":15,"message":"Max character length is 15"},"minLength":{"value":4,"message":"Minimum character length is 4"}},"disabledOnPage":{"add":false,"edit":true,"view":true}},{"fieldName":"email","type":"email","size":6,"rules":{"required":true},"disabledOnPage":{"add":false,"edit":true,"view":true}},{"fieldName":"name","fieldLabel":"Name","size":6,"rules":{"required":true}},{"fieldName":"id_role","fieldLabel":"Role","type":"dropdown","size":6,"dataFrom":{"api":"api/role?mode=summary","resp_key":"data","baseUrl":"sso","field_label":["name"],"field_value":"id","field_label_separator":" - ","api_getAlways":false,"get_params":[{"key":"id_app","value":"id_app","valueFrom":"other"}]},"initialValueFromOther":"role_name","initialValueFromOtherByLabel":true,"rules":{"required":true}}]},{"type":"column","size":3,"children":[{"fieldName":"avatar","fieldLabel":"Photo","type":"file_image","blankWithInitial":true,"previewStyle":{"minHeight":"188px"}}]},{"fieldName":"filter_unit","size":6,"hideOptionsCodeField":true,"fieldLabel":"Member Of","type":"dropdown","dataFrom":{"api":"api/unit?flat_mode=true","resp_key":"data","baseUrl":"sso","field_label":"name","field_value":"id","api_getAlways":false,"get_params":[{"key":"id_unit_app","value":"id_unit_app","valueFrom":"other"}]}},{"fieldName":"password","size":6,"type":"password","icon":"material:password","hideOnPage":{"add":false,"edit":false,"view":true},"rules":{"required":true,"pattern":{"value":"/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/","message":"enter 6 - 16 character, have special characters and number"}}},{"fieldName":"last_request_time","size":4,"type":"datetime","includeOnPayload":false,"isDisabled":true,"hideOnPage":{"add":true,"edit":false,"view":false}},{"fieldName":"blockCount","size":2,"type":"number-btn","hideOnPage":{"add":true,"edit":false,"view":false}},{"type":"separator","size":12,"fieldLabel":"Employee Mapping","className":"divider-start divider-dashed fw-bolder","icon":"material:person_search","showIf":[{"fieldName":"id_app.setting.user_employee_mapping","operator":"===","value":"true","fieldNameFromDropdownData":true}]},{"fieldName":"id_employee","fieldLabel":"Employee","size":6,"type":"dropdown","dataFrom":{"api":"api/user/users_employee","resp_key":"data","baseUrl":"sso","field_label":["FirstName","LastName"],"field_value":"id","field_img":"PhotoPath","field_label_separator":" ","api_getAlways":true,"get_params":[{"key":"id_unit","value":"id_unit","valueFrom":"other"},{"key":"id_app","value":"id_app","valueFrom":"other"}]},"initialValueFromOther":"name_employee","initialValueFromOtherByLabel":true,"afterChangeFillOther":["name_employee=FirstName","name_last_employee=LastName","avatar_employee=PhotoPath","approvalLine=ApprovalLine","approvalLineName=ApprovalLine_name","jobLevel_name=JobLevel_name"],"showIf":[{"fieldName":"id_app.setting.user_employee_mapping","operator":"===","value":"true","fieldNameFromDropdownData":true}]},{"fieldName":"name_employee","isHidden":true},{"fieldName":"avatar_employee","isHidden":true},{"fieldName":"name_last_employee","isHidden":true},{"fieldName":"approvalLine","isHidden":true},{"fieldName":"approvalLineName","isDisabled":true,"showIf":[{"fieldName":"id_app.setting.user_employee_mapping","operator":"===","value":"true","fieldNameFromDropdownData":true}]},{"fieldName":"jobLevel_name","isHidden":true},{"fieldName":"isManager","fieldLabel":"Manager","size":2,"type":"radio","dataFrom":{"value":[{"value":true,"label":"Yes","color":"success"},{"value":false,"label":"No","color":"danger"}]},"isHidden":true}]}}}')}}]);
//# sourceMappingURL=118.666e6966.chunk.js.map