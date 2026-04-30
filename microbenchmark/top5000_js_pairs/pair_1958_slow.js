const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = [];
          for (var VAR_4 = 0; VAR_4 < VAR_2; VAR_4++) VAR_3 = VAR_3.concat(VAR_1);
          return VAR_3.sort();
        }
        var VAR_5 = ["Amy", "Dolly", "Jason", "Madison", "Patricia"];
        var VAR_6 = FUNCTION_1(VAR_5, 1000);
        var VAR_7 = /^[^A-J]/m;
        var VAR_8 = VAR_5.join("\n");
        var VAR_9 = VAR_8.substring(0, VAR_7.exec(VAR_8).index - 1).split("\n");
        var VAR_10 = VAR_6.join("\n");
        var VAR_11 = VAR_8.substring(0, VAR_7.exec(VAR_8).index - 1).split("\n");
    }
};