# Hmnow Roku Automation

## Requirements

1. Install go from: https://golang.org/doc/install
2. Install nvm or node.js version 10 or higger

## Steps to Execute tests

1. git clone {{url_repo}}
2. cd hmnow-roku-automation
3. Please create a zip file from the repository https://github.com/spiritclips/roku-feeln-scenegraph. After that copy this zip file to the root of this project. This zip files will use to launch the channel on the Roku device. 
4. git submodule init
5. cd submodule/rokudev
6. export GOPATH=$(pwd)
7. cd src
8. go get github.com/gorilla/mux
9. go get github.com/sirupsen/logrus
10. go build main.go
11. mv main ../../../
12. ./main
13. Open new tab of terminal in the same position
14. cd ../../../
15. npm install
16. Set the correct values of your device in the .envfile
17. npm run test
