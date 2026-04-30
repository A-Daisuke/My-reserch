const Benchmark = {
    run: function() {
        var VAR_1 =
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.";
        var VAR_2 = VAR_1.split(" ");
        VAR_2.forEach(function (VAR_3, VAR_4) {
          return new RegExp(VAR_3, "gi").test(VAR_1);
        });
    }
};