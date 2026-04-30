const Benchmark = {
    run: function() {
        var VAR_1 = Array(100000).join("hello");
        var VAR_2 = VAR_1 + "\u2012" + VAR_1;
        VAR_2.replace(/\u2012/g, function () {
          return "\\u2012";
        });
    }
};