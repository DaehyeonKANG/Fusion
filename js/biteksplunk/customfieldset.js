function(doc) {
    doc.addField("DATA_SOURCE", "BITEKSPLUNK");

    customFieldSet(doc, ["web_view_link_s", "view_url_s", "web_view_link", "view_url"], "view_path");
    // customFieldSet(doc, ["web_content_link"], "download_path");
    // customFieldSet(doc, ["Content", "Content-Type", "_lw_parser_content_type"], "contents_type");
    customFieldSet(doc, ["owners.0.displayName"], "contents_owner");
    // customFieldSet(doc, ["Last-Modified", "lastModified_dt"], "last_modify");

    return doc;
}

function customFieldSet(doc, keyList, fieldName) {
    var field_name = fieldName;
    for (var i = 0; i < keyList.length; i++) {
        key = doc.getFirstFieldValue(keyList[i]);
        if (key != null) {
            doc.addField(field_name, key);
            // break;
            return;
        }

        if (i == keyList.length - 1) {
            doc.addField(field_name, "Check");
            return;
        }
    }
}