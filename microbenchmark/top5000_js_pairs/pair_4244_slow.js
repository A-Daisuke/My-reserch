const Benchmark = {
    run: function() {
        var VAR_1 = {};
        var VAR_2 = ["a", "b", "c", "d", "e"];
        try {
          var VAR_3 = VAR_1["a"]["b"]["c"]["d"]["e"];
        } catch (VAR_4) {
          var VAR_5 = undefined;
        }
    }
};