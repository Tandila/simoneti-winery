import {Injectable} from '@angular/core';
import {LightboxAdapter} from '@fnxone/ngx-photoswipe';

@Injectable()
export class CustomLightboxAdapter extends LightboxAdapter {
  override allowPanToNext = true;
  override spacing = 0.12;
  override bgOpacity = 0.7;
  override mouseUsed = false;
  override loop = true;
  override pinchToClose = true;
  override closeOnScroll = false;
  override closeOnVerticalDrag = true;
  override hideAnimationDuration = 333;
  override showAnimationDuration = 333;
  override showHideOpacity = true;
  override escKey = true;
  override arrowKeys = true;
  override shareEl = true;
  override zoomEl = false;
  getPageURLForShare = (shareButtonData: any) => window.location.href;
}
