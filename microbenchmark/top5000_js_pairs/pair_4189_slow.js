const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = new Function(
            "_data_",
            "try { return _data_." + VAR_2 + "} catch (e){ return undefined }",
          );
          return VAR_3(VAR_1);
        }
        var VAR_4 = { KEY_1: { KEY_2: { KEY_3: "Hello!" } } };
        FUNCTION_1(VAR_4, "a.b.c");
    }
};