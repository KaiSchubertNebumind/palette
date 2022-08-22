(function() {var implementors = {};
implementors["palette"] = [{"text":"impl&lt;C, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>&lt;<a class=\"struct\" href=\"palette/struct.Alpha.html\" title=\"struct palette::Alpha\">Alpha</a>&lt;C, T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.Alpha.html\" title=\"struct palette::Alpha\">Alpha</a>&lt;C, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>,&nbsp;</span>","synthetic":false,"types":["palette::alpha::alpha::Alpha"]},{"text":"impl&lt;T, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>&lt;T&gt; for <a class=\"struct\" href=\"palette/struct.Alpha.html\" title=\"struct palette::Alpha\">Alpha</a>&lt;C, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":["palette::alpha::alpha::Alpha"]},{"text":"impl&lt;C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>&lt;<a class=\"struct\" href=\"palette/blend/struct.PreAlpha.html\" title=\"struct palette::blend::PreAlpha\">PreAlpha</a>&lt;C&gt;&gt; for <a class=\"struct\" href=\"palette/blend/struct.PreAlpha.html\" title=\"struct palette::blend::PreAlpha\">PreAlpha</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a> + <a class=\"trait\" href=\"palette/blend/trait.Premultiply.html\" title=\"trait palette::blend::Premultiply\">Premultiply</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C::<a class=\"associatedtype\" href=\"palette/blend/trait.Premultiply.html#associatedtype.Scalar\" title=\"type palette::blend::Premultiply::Scalar\">Scalar</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a> + <a class=\"trait\" href=\"palette/num/trait.Real.html\" title=\"trait palette::num::Real\">Real</a>,&nbsp;</span>","synthetic":false,"types":["palette::blend::pre_alpha::PreAlpha"]},{"text":"impl&lt;C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.f32.html\">f32</a>&gt; for <a class=\"struct\" href=\"palette/blend/struct.PreAlpha.html\" title=\"struct palette::blend::PreAlpha\">PreAlpha</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.f32.html\">f32</a>&gt; + <a class=\"trait\" href=\"palette/blend/trait.Premultiply.html\" title=\"trait palette::blend::Premultiply\">Premultiply</a>&lt;Scalar = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.f32.html\">f32</a>&gt;,&nbsp;</span>","synthetic":false,"types":["palette::blend::pre_alpha::PreAlpha"]},{"text":"impl&lt;C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.f64.html\">f64</a>&gt; for <a class=\"struct\" href=\"palette/blend/struct.PreAlpha.html\" title=\"struct palette::blend::PreAlpha\">PreAlpha</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"palette/blend/trait.Premultiply.html\" title=\"trait palette::blend::Premultiply\">Premultiply</a>&lt;Scalar = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.f64.html\">f64</a>&gt;,&nbsp;</span>","synthetic":false,"types":["palette::blend::pre_alpha::PreAlpha"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>&lt;<a class=\"struct\" href=\"palette/struct.Lab.html\" title=\"struct palette::Lab\">Lab</a>&lt;Wp, T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.Lab.html\" title=\"struct palette::Lab\">Lab</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>,&nbsp;</span>","synthetic":false,"types":["palette::lab::Lab"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>&lt;T&gt; for <a class=\"struct\" href=\"palette/struct.Lab.html\" title=\"struct palette::Lab\">Lab</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["palette::lab::Lab"]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>&lt;<a class=\"struct\" href=\"palette/luma/struct.Luma.html\" title=\"struct palette::luma::Luma\">Luma</a>&lt;S, T&gt;&gt; for <a class=\"struct\" href=\"palette/luma/struct.Luma.html\" title=\"struct palette::luma::Luma\">Luma</a>&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"palette/luma/trait.LumaStandard.html\" title=\"trait palette::luma::LumaStandard\">LumaStandard</a>&lt;TransferFn = <a class=\"struct\" href=\"palette/encoding/linear/struct.LinearFn.html\" title=\"struct palette::encoding::linear::LinearFn\">LinearFn</a>&gt;,&nbsp;</span>","synthetic":false,"types":["palette::luma::luma::Luma"]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>&lt;T&gt; for <a class=\"struct\" href=\"palette/luma/struct.Luma.html\" title=\"struct palette::luma::Luma\">Luma</a>&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"palette/luma/trait.LumaStandard.html\" title=\"trait palette::luma::LumaStandard\">LumaStandard</a>&lt;TransferFn = <a class=\"struct\" href=\"palette/encoding/linear/struct.LinearFn.html\" title=\"struct palette::encoding::linear::LinearFn\">LinearFn</a>&gt;,&nbsp;</span>","synthetic":false,"types":["palette::luma::luma::Luma"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>&lt;<a class=\"struct\" href=\"palette/struct.Luv.html\" title=\"struct palette::Luv\">Luv</a>&lt;Wp, T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.Luv.html\" title=\"struct palette::Luv\">Luv</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>,&nbsp;</span>","synthetic":false,"types":["palette::luv::Luv"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>&lt;T&gt; for <a class=\"struct\" href=\"palette/struct.Luv.html\" title=\"struct palette::Luv\">Luv</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["palette::luv::Luv"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>&lt;<a class=\"struct\" href=\"palette/struct.Oklab.html\" title=\"struct palette::Oklab\">Oklab</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.Oklab.html\" title=\"struct palette::Oklab\">Oklab</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>,&nbsp;</span>","synthetic":false,"types":["palette::oklab::Oklab"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>&lt;T&gt; for <a class=\"struct\" href=\"palette/struct.Oklab.html\" title=\"struct palette::Oklab\">Oklab</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["palette::oklab::Oklab"]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>&lt;<a class=\"struct\" href=\"palette/rgb/struct.Rgb.html\" title=\"struct palette::rgb::Rgb\">Rgb</a>&lt;S, T&gt;&gt; for <a class=\"struct\" href=\"palette/rgb/struct.Rgb.html\" title=\"struct palette::rgb::Rgb\">Rgb</a>&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"palette/rgb/trait.RgbStandard.html\" title=\"trait palette::rgb::RgbStandard\">RgbStandard</a>&lt;TransferFn = <a class=\"struct\" href=\"palette/encoding/linear/struct.LinearFn.html\" title=\"struct palette::encoding::linear::LinearFn\">LinearFn</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>,&nbsp;</span>","synthetic":false,"types":["palette::rgb::rgb::Rgb"]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>&lt;T&gt; for <a class=\"struct\" href=\"palette/rgb/struct.Rgb.html\" title=\"struct palette::rgb::Rgb\">Rgb</a>&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"palette/rgb/trait.RgbStandard.html\" title=\"trait palette::rgb::RgbStandard\">RgbStandard</a>&lt;TransferFn = <a class=\"struct\" href=\"palette/encoding/linear/struct.LinearFn.html\" title=\"struct palette::encoding::linear::LinearFn\">LinearFn</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["palette::rgb::rgb::Rgb"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>&lt;<a class=\"struct\" href=\"palette/struct.Xyz.html\" title=\"struct palette::Xyz\">Xyz</a>&lt;Wp, T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.Xyz.html\" title=\"struct palette::Xyz\">Xyz</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>,&nbsp;</span>","synthetic":false,"types":["palette::xyz::Xyz"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>&lt;T&gt; for <a class=\"struct\" href=\"palette/struct.Xyz.html\" title=\"struct palette::Xyz\">Xyz</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["palette::xyz::Xyz"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>&lt;<a class=\"struct\" href=\"palette/struct.Yxy.html\" title=\"struct palette::Yxy\">Yxy</a>&lt;Wp, T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.Yxy.html\" title=\"struct palette::Yxy\">Yxy</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>,&nbsp;</span>","synthetic":false,"types":["palette::yxy::Yxy"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a>&lt;T&gt; for <a class=\"struct\" href=\"palette/struct.Yxy.html\" title=\"struct palette::Yxy\">Yxy</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/arith/trait.MulAssign.html\" title=\"trait core::ops::arith::MulAssign\">MulAssign</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["palette::yxy::Yxy"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()