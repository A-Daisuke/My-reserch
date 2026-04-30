const Benchmark = {
    run: function() {
        var VAR_1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_";
        var VAR_2 = VAR_1.split("");
        var VAR_3 = /\w/;
        function FUNCTION_1(VAR_4) {
          for (let VAR_5 of VAR_1) {
            VAR_4(VAR_5);
          }
        }
        FUNCTION_1((VAR_6) => VAR_2.find((VAR_7) => VAR_7 === VAR_6));
    }
};