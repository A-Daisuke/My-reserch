const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        var VAR_3 = [];
        var VAR_4 = [];
        for (var VAR_5 = 0; VAR_5 <= 10000; VAR_5++) {
          var VAR_6 = Math.floor(Math.random() * 35856000000 + 1356998400000);
          VAR_1.push(VAR_6);
          var VAR_7 = new Date(VAR_6).toJSON();
          VAR_2.push(VAR_7);
          VAR_3.push(VAR_6 + 0.123456);
          VAR_4.push(VAR_7.substr(0, 19) + ".123456" + VAR_7.substr(19, 1));
        }
        for (var VAR_8 = 0; VAR_5 <= 10000; VAR_5++) {
          var VAR_9 = new Date(VAR_2[VAR_5]);
        }
    }
};