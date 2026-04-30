const Benchmark = {
    run: function() {
        var VAR_7 = "";
        function FUNCTION_1(VAR_4) {
          var VAR_5 = "hey " + VAR_4 + " what is up?";
          VAR_5 += "not much aye?";
          return VAR_5;
        }
        for (var VAR_6 = 0; VAR_6 < 10000; VAR_6++) {
          VAR_7 += FUNCTION_1("there" + VAR_6);
        }
    }
};