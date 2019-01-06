# Context

I have an old laptop when if it is turned off it doesn't remember date and time anymore. Date becomes 2010/01/01 and time 00:00. Each time i have to naviguate secured website like google, all SSL certicates are invalid. So i need to update date and time manually and this is really tedious.

So, i create a small program we can update it easly.

# Requirements

  - Windows 7 or more
  - NodeJs
  - Internet connection (date and time are retrieved from http://worldclockapi.com/api/json/utc/now)

# Installation

run command lines :

```sh
$ npm install
```

# Running

Juste double click **update-date-time.bat**. You can even create a short link of this and copy it to desktop.

*NB* : 

* The program will be run automatically as administrator. Therefore, a windows popup will be shown. It will ask to run the programm as administrator. Juste click Yes.
* By default, it used 2 hours offset from UTC. If you need to change it. Just modify the following code line which is found in src/extractor.js

```javascript
const hourShiftTime = 2;
``` 

Enjoy it! :)