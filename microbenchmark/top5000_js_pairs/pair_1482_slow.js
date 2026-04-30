const Benchmark = {
    run: function() {
        var VAR_1 = new Array(5000).join("10,11,12,13,14,15%");
        var VAR_2 = /(.*?),(.*?),(.*?),(.*?),(.*?),(.*?)%/g;
        var VAR_3 = VAR_1.split("%");
        var VAR_4,
          VAR_5 = [];
        while ((VAR_4 = VAR_3.shift()) && (VAR_4 = VAR_4.split(","))) {
          VAR_5.push({
            KEY_1: +VAR_4[0],
            KEY_2: +VAR_4[1],
            KEY_3: +VAR_4[2],
            KEY_4: +VAR_4[3],
            KEY_5: +VAR_4[4],
            KEY_6: +VAR_4[5],
          });
        }
    }
};