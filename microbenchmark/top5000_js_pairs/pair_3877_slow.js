const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: { KEY_2: { KEY_3: { KEY_4: { KEY_5: {} } } } } };
        var VAR_2 = {};
        var VAR_3 = ["a", "b", "c", "d", "e"];
        var VAR_4 = {};
        try {
          var VAR_5 = VAR_2["a"]["b"]["c"]["d"]["e"];
        } catch (VAR_6) {
          var VAR_7 = undefined;
        }
    }
};