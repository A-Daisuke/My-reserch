const Benchmark = {
    run: function() {
        var VAR_1 = [
          {
            KEY_1: function () {},
          },
          { KEY_2: "toto" },
        ];
        for (var VAR_2 = 0, VAR_3 = VAR_1.length; VAR_2 < VAR_3; ++VAR_2) {
          var VAR_4 = VAR_1[VAR_2];
          try {
            VAR_4.KEY_1();
          } catch (VAR_5) {}
        }
    }
};