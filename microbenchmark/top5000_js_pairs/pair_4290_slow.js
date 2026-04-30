const Benchmark = {
    run: function() {
        var VAR_1 = ["hello", "yellow", "tooth", "tootth"];
        for (var VAR_2 = 0, VAR_3 = VAR_1.length; VAR_2 < VAR_3; VAR_2++) {
          FUNCTION_1(VAR_1[VAR_2]);
        }
        function FUNCTION_1(VAR_4) {
          VAR_5 = VAR_4.split("");
          var VAR_6 = [];
          VAR_5.map(function (VAR_7) {
            var VAR_8 = new RegExp(VAR_7, "g");
            if (VAR_4.match(VAR_8).length === 1) {
              VAR_6.push(VAR_7);
            }
          });
          return VAR_6[0];
        }
    }
};