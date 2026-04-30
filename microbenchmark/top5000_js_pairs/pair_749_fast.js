const Benchmark = {
    run: function() {
        var VAR_1 = 1048576;
        var VAR_2 = new ArrayBuffer(VAR_1 * 16);
        var VAR_3 = new ArrayBuffer(VAR_1 * 16);
        function FUNCTION_1(VAR_4) {
          var VAR_5 = new Uint8Array(VAR_2, 0, VAR_4);
          var VAR_6 = new Uint8Array(VAR_3, 0, VAR_4);
          VAR_6.set(VAR_5);
        }
        FUNCTION_1(VAR_1 * 2);
    }
};