const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: { KEY_2: "Spew monster" } };
        var VAR_2 = { KEY_3: { KEY_4: VAR_1 } };
        Object(
          Object(
            Object(Object(Object(VAR_2.KEY_3).KEY_4).KEY_1)
              .KEY_2,
          ).great_grandchild,
        ).great_great_grandchild;
    }
};