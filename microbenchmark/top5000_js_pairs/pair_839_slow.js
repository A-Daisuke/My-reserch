const Benchmark = {
    run: function() {
        var VAR_1 = new Array(100000).join("a").toString();
        var VAR_2 = VAR_1.split("");
        var VAR_3 = VAR_1.split("");
        var VAR_4 = VAR_2.length;
        for (var VAR_5 = 0; VAR_5 < VAR_4; VAR_5++) {
          var VAR_6 = VAR_2[VAR_5];
          if (VAR_6 === "x") break;
        }
    }
};