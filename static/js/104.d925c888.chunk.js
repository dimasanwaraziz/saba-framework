(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[104],{485:function(e){e.exports=JSON.parse('{"pageType":"crud","pageTitle":"Announcement","pageModuleTitle":"App Setting","crudOpt":{"endpointName":"api/announcement","baseUrl":"sso","detailPageModalSize":"lg","detailPage":true,"detailFromGrid":true,"afterEditReloadOtherPage":["widget_announcement"],"afterAddReloadOtherPage":["widget_announcement"],"data":{"dynamicColumns":[{"fieldName":"title","minWidth":"300px"},{"fieldName":"type","minWidth":"300px","lookupValue":[{"value":"other","label":"General Information"},{"value":"holiday","label":"Holiday Announcement"},{"value":"employee_new","label":"New Employee Announcement"},{"value":"employee_resignation","label":"Employee Resignation Announcement"},{"value":"promotion","label":"Promotion Announcement"},{"value":"company_policy","label":"Company Policy Update"},{"value":"company_restructure","label":"Organizational Restructuring"}]},{"fieldName":"publish_date","dataFormat":"datetime:DD MMM YYYY - HH:mm"},{"fieldName":"publish_endDate","dataFormat":"datetime:DD MMM YYYY - HH:mm"}],"dynamicForm":[{"type":"column","size":4,"children":[{"fieldName":"image_path","fieldLabel":"Announcement Image","type":"file_image","fileImageOpt":{"width":"500px","height":"300px"},"rules":{"pattern":{"value":".png,.jpeg"}}}]},{"type":"column","size":8,"children":[{"fieldName":"title","fieldLabel":"Title","size":12,"rules":{"required":true,"maxLength":{"value":300,"message":"Invalid name, max character length is 200"}}},{"fieldName":"type","fieldLabel":"Type","type":"dropdown","size":12,"icon":"fontAwesome:bullhorn","dataFrom":{"value":[{"value":"other","label":"General Information"},{"value":"holiday","label":"Holiday Announcement"},{"value":"employee_new","label":"New Employee Announcement"},{"value":"employee_resignation","label":"Employee Resignation Announcement"},{"value":"promotion","label":"Promotion Announcement"},{"value":"company_policy","label":"Company Policy Update"},{"value":"company_restructure","label":"Organizational Restructuring"}]},"rules":{"required":true}},{"fieldName":"id_unit","type":"dropdown","fieldLabel":"For Department","size":4,"dataFrom":{"api":"api/unit?flat_mode=true","resp_key":"data","baseUrl":"sso","field_label":["name"],"field_value":"id","field_label_separator":" - ","api_getAlways":false}},{"fieldName":"publish_date","fieldLabel":"Publish Date","type":"datetime","size":4,"rules":{"required":true},"afterChangeFillOther":["publish_endDate=null"]},{"fieldName":"publish_endDate","fieldLabel":"Publish End Date","type":"datetime","size":4,"calendarRules":{"defaultDate":null,"defaultHour":null,"minDateFromField":"publish_date","minTimeFromField":"publish_date","time_24hr":true}}]},{"fieldName":"description","fieldLabel":"Announcement Content Description","type":"editor","size":12}]}}}')}}]);
//# sourceMappingURL=104.d925c888.chunk.js.map