const Benchmark = {
    run: function() {
        var VAR_1 = "Hello";
        var VAR_2 = "world";
        var VAR_3 = "once";
        var VAR_4 = "again";
        var VAR_5 = `${VAR_1} ${VAR_2} ${VAR_3} ${VAR_4}`;
        function FUNCTION_1(VAR_6) {
          return VAR_6.split("").reverse().join("");
        }
        console.log(VAR_5);
        console.log(FUNCTION_1(VAR_5));
    }
};