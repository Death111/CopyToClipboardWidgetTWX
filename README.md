# CopyToClipboardWidgetTwx

ThingWorx widget binds to a string input property and offers a "copy to clipboard" service.

## Configuration
### Designtime
- Mashup  Builder
![Alt text](/readme/copyToClipboardWidgetTwx_builder.PNG.png?raw=true "Mashup Builder")

### Runtime
- invisible

## Build

Execute `gradlew clean build`.

Optional build parameters:
* BUILD_NUMBER
* BUILD_SOURCEBRANCH
* BUILD_SOURCEVERSION
* PACKAGE_VERSION

e.g. `gradlew clean build -PBUILD_NUMBER=123 -PBUILD_SOURCEBRANCH=123 -PBUILD_SOURCEVERSION=123 -PPACKAGE_VERSION=1.0.123`