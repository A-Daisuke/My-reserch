const Benchmark = {
    run: function() {
        var VAR_1 = "a",
          VAR_2 = "b",
          VAR_3 = "c";
        function FUNCTION_1(VAR_4, VAR_5, VAR_6) {
          (this.VAR_7 = VAR_1), (this.VAR_8 = VAR_2), (this.VAR_9 = VAR_3);
        }
        var VAR_10 = new FUNCTION_1(VAR_1, VAR_2, VAR_3);
        var VAR_11 = new FUNCTION_1(VAR_3, VAR_2, VAR_1);
    }
};