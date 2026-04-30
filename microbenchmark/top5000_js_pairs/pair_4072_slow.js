const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 50; VAR_2++) {
          VAR_1.push("String_" + 2 * VAR_2);
          VAR_1.push("String_" + VAR_2);
        }
        var VAR_3 = [];
        for (var VAR_4 = 0; VAR_4 < VAR_1.length; VAR_4++) {
          var VAR_5 = VAR_1[VAR_4];
          if (VAR_3.indexOf(VAR_5) === -1) VAR_3.push(VAR_5);
        }
    }
};