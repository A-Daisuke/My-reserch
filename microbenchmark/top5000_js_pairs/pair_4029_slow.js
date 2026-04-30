const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = VAR_1.toLowerCase(),
            VAR_3 = [];
          for (var VAR_4 in VAR_2) {
            VAR_3.push(VAR_2[VAR_4].substring(0, 1).toUpperCase() + VAR_2[VAR_4].slice(1));
          }
          return VAR_3.join(" ");
        }
        FUNCTION_1("THE quick broWn fox JUMps oVer the Lazy dOG");
    }
};