#!/bin/sh
sudo npm install forever -g
sudo npm install forever-service -g
sudo forever-service install ScanService
sudo service ScanService Start


