import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

@Plugin({
  pluginName: 'JTest',
  plugin: 'com.jtest.plugin',
  pluginRef: 'JTest', 
  repo: 'https://github.com/jlahare/jtest.git', 
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})

@Injectable()
export class JTestProvider  extends IonicNativePlugin 
{

  @Cordova()
  coolMethod(arg1: string): Promise<string> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  add(arg1: any): Promise<string> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  multiply(arg1: any): Promise<string> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  substract(arg1: any): Promise<string> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  divide(arg1: any): Promise<string> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }


}
