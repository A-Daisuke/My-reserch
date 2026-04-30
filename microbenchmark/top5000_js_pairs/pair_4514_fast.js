const Benchmark = {
    run: function() {
        var VAR_1 = "2+3+4+5+56+234+234+644+234+645+2349";
        var VAR_2 = "'use strict';" + VAR_1;
        var VAR_3 = new Function(VAR_1);
        var VAR_4 = new Function(VAR_2);
        function FUNCTION_1() {
          2 + 3 + 4 + 5 + 56 + 234 + 234 + 644 + 234 + 645 + 2349;
        }
        eval(VAR_1);
    }
};