const Benchmark = {
    run: function() {
        var VAR_1 = {};
        var VAR_2 = ["a", "b", "c", "d", "e"];
        var VAR_3 = {};
        try {
          var VAR_4 = VAR_1["a"]["b"]["c"]["d"]["e"];
        } catch (VAR_5) {
          var VAR_6 = undefined;
        }
    }
};