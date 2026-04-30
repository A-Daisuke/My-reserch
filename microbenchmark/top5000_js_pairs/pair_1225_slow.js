const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2;
        function FUNCTION_1(VAR_3, VAR_4) {
          var VAR_5 = "hey " + VAR_4 + " what is up?";
          VAR_5 += "not much aye?";
          VAR_3.push(VAR_5);
        }
        for (var VAR_6 = 0; VAR_6 < 10000; VAR_6++) {
          FUNCTION_1(VAR_1, "there" + VAR_6);
        }
        VAR_2 = VAR_1.join("");
    }
};