const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_6) {
          VAR_6.VAR_7 = "dfv";
          VAR_6.VAR_8 = "dfv";
          VAR_6.VAR_9 = "dfv";
          VAR_6.VAR_10 = "dfv";
          return VAR_6;
        }
        for (var VAR_5 = 0; VAR_5 < 1000; VAR_5++) FUNCTION_1({});
    }
};