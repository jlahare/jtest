package com.jtest.plugin;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * This class echoes a string called from JavaScript.
 */
public class JTest extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("coolMethod")) {
            String message = args.getString(0);
            this.coolMethod(message, callbackContext);
            return true;
        }
        if (action.equals("add")) {

            String params = "";
            try{
                String p1 = args.getJSONObject(0).getString("param1");
                String p2 = args.getJSONObject(0).getString("param2");
                params += p1 + " , " + p2;
            }catch(Exception ex){}
          
            this.add("Total : "+params , callbackContext);
            return true;
        }
        return false;
    }

    private void coolMethod(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            callbackContext.success("Hello From Plugin : " + message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }

    private void add(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            callbackContext.success("Add Method : " + message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
}
