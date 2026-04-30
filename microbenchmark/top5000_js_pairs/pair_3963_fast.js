const Benchmark = {
    run: function() {
        var VAR_1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_";
        var VAR_2 = VAR_1.split("");
        var VAR_6 = /\w/;
        function FUNCTION_1(VAR_3) {
          for (let VAR_4 of VAR_1) {
            VAR_3(VAR_4);
          }
        }
        FUNCTION_1((VAR_5) => VAR_6.test(VAR_5));
    }
};