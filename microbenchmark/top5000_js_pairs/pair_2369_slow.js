const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          var VAR_3 = FUNCTION_1();
          VAR_1.push(VAR_3);
        }
        function FUNCTION_1() {
          return "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_");
        }
    }
};