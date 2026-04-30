const Benchmark = {
    run: function() {
        var VAR_1 = new ArrayBuffer(1024);
        var VAR_2 = new DataView(VAR_1);
        var VAR_3 = VAR_2.getUint8;
        var VAR_4 = "getUint8";
        var FUNCTION_1 = function (VAR_5) {
          return VAR_2[VAR_4](VAR_5);
        };
        for (var VAR_6 = 0; VAR_6 < 1024; ++VAR_6) {
          VAR_3.call(VAR_2, VAR_6);
        }
    }
};