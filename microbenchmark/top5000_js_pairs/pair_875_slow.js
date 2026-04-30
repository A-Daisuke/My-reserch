const Benchmark = {
    run: function() {
        var VAR_1 = new Array(10000).join(encodeURI("hello龜"));
        var VAR_2 =
          VAR_1.length - 2 * (VAR_1.length - VAR_1.replace(/%/g, "").length);
    }
};