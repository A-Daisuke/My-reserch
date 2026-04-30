const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1 === null || VAR_1 === "") return false;
          else {
            VAR_1 = VAR_1.split("_").join(" ");
            VAR_1 = VAR_1.toString();
          }
          return VAR_1.replace(/\w\S*/g, function (VAR_5) {
            return VAR_5.charAt(0).toUpperCase() + VAR_5.substr(1).toLowerCase();
          });
        }
        FUNCTION_1("THE quick broWn fox JUMps oVer the Lazy dOG");
    }
};