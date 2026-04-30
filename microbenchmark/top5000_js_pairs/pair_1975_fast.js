const Benchmark = {
    run: function() {
        var VAR_1 = 10,
          VAR_2 = 10;
        var VAR_3 = 30,
          VAR_4 = 30;
        var VAR_5 = 255,
          VAR_6 = 127,
          VAR_7 = 0,
          VAR_8 = 0.5;
        var VAR_9 = [];
        for (var VAR_10 = 0; VAR_10 < 1000; VAR_10++)
          VAR_9.push(
            '<div style="left:',
            VAR_1 + "",
            "px;top:",
            VAR_2 + "",
            "px;width:",
            VAR_3 + "",
            "px;height:",
            VAR_4 + "",
            "px;background:rgba(",
            VAR_5 + "",
            ",",
            VAR_6 + "",
            ",",
            VAR_7 + "",
            ",",
            VAR_8 + "",
            ')"></div>',
          );
        var VAR_11 = VAR_9.join("");
    }
};