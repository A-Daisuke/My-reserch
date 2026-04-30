const Benchmark = {
    run: function() {
        var VAR_1 = ["0x0", "0", "5", "11111111111111111"];
        var VAR_2 = 0;
        function FUNCTION_1(VAR_3) {
          return String(~~VAR_3) === VAR_3;
        }
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++)
          for (var VAR_5 = 0; VAR_5 < VAR_1.length; VAR_5++) {
            if (FUNCTION_1(VAR_1[VAR_5])) VAR_2++;
          }
        console.log(VAR_2);
    }
};