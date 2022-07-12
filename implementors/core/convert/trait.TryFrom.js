(function() {var implementors = {};
implementors["palette"] = [{"text":"impl&lt;'a, C, T, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a [T]</a>&gt; for &amp;'a <a class=\"struct\" href=\"palette/struct.Alpha.html\" title=\"struct palette::Alpha\">Alpha</a>&lt;C, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"palette/struct.Alpha.html\" title=\"struct palette::Alpha\">Alpha</a>&lt;C, T&gt;: <a class=\"trait\" href=\"palette/cast/trait.ArrayCast.html\" title=\"trait palette::cast::ArrayCast\">ArrayCast</a>&lt;Array = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.array.html\">; N]</a>&gt;,&nbsp;</span>","synthetic":false,"types":["palette::alpha::alpha::Alpha"]},{"text":"impl&lt;'a, C, T, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a mut [T]</a>&gt; for &amp;'a mut <a class=\"struct\" href=\"palette/struct.Alpha.html\" title=\"struct palette::Alpha\">Alpha</a>&lt;C, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"palette/struct.Alpha.html\" title=\"struct palette::Alpha\">Alpha</a>&lt;C, T&gt;: <a class=\"trait\" href=\"palette/cast/trait.ArrayCast.html\" title=\"trait palette::cast::ArrayCast\">ArrayCast</a>&lt;Array = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.array.html\">; N]</a>&gt;,&nbsp;</span>","synthetic":false,"types":["palette::alpha::alpha::Alpha"]},{"text":"impl&lt;'a, C:&nbsp;<a class=\"trait\" href=\"palette/blend/trait.Premultiply.html\" title=\"trait palette::blend::Premultiply\">Premultiply</a>, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a [</a>&lt;C as <a class=\"trait\" href=\"palette/blend/trait.Premultiply.html\" title=\"trait palette::blend::Premultiply\">Premultiply</a>&gt;::<a class=\"associatedtype\" href=\"palette/blend/trait.Premultiply.html#associatedtype.Scalar\" title=\"type palette::blend::Premultiply::Scalar\">Scalar</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">]</a>&gt; for &amp;'a <a class=\"struct\" href=\"palette/blend/struct.PreAlpha.html\" title=\"struct palette::blend::PreAlpha\">PreAlpha</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"palette/blend/struct.PreAlpha.html\" title=\"struct palette::blend::PreAlpha\">PreAlpha</a>&lt;C&gt;: <a class=\"trait\" href=\"palette/cast/trait.ArrayCast.html\" title=\"trait palette::cast::ArrayCast\">ArrayCast</a>&lt;Array = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.array.html\">[</a>C::<a class=\"associatedtype\" href=\"palette/blend/trait.Premultiply.html#associatedtype.Scalar\" title=\"type palette::blend::Premultiply::Scalar\">Scalar</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.array.html\">; N]</a>&gt;,&nbsp;</span>","synthetic":false,"types":["palette::blend::pre_alpha::PreAlpha"]},{"text":"impl&lt;'a, C:&nbsp;<a class=\"trait\" href=\"palette/blend/trait.Premultiply.html\" title=\"trait palette::blend::Premultiply\">Premultiply</a>, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a mut [</a>&lt;C as <a class=\"trait\" href=\"palette/blend/trait.Premultiply.html\" title=\"trait palette::blend::Premultiply\">Premultiply</a>&gt;::<a class=\"associatedtype\" href=\"palette/blend/trait.Premultiply.html#associatedtype.Scalar\" title=\"type palette::blend::Premultiply::Scalar\">Scalar</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">]</a>&gt; for &amp;'a mut <a class=\"struct\" href=\"palette/blend/struct.PreAlpha.html\" title=\"struct palette::blend::PreAlpha\">PreAlpha</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"palette/blend/struct.PreAlpha.html\" title=\"struct palette::blend::PreAlpha\">PreAlpha</a>&lt;C&gt;: <a class=\"trait\" href=\"palette/cast/trait.ArrayCast.html\" title=\"trait palette::cast::ArrayCast\">ArrayCast</a>&lt;Array = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.array.html\">[</a>C::<a class=\"associatedtype\" href=\"palette/blend/trait.Premultiply.html#associatedtype.Scalar\" title=\"type palette::blend::Premultiply::Scalar\">Scalar</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.array.html\">; N]</a>&gt;,&nbsp;</span>","synthetic":false,"types":["palette::blend::pre_alpha::PreAlpha"]},{"text":"impl&lt;'a, O, T, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a [T]</a>&gt; for &amp;'a <a class=\"struct\" href=\"palette/cast/struct.Packed.html\" title=\"struct palette::cast::Packed\">Packed</a>&lt;O, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.array.html\">; N]</a>&gt;","synthetic":false,"types":["palette::cast::packed::Packed"]},{"text":"impl&lt;'a, O, T, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a mut [T]</a>&gt; for &amp;'a mut <a class=\"struct\" href=\"palette/cast/struct.Packed.html\" title=\"struct palette::cast::Packed\">Packed</a>&lt;O, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.array.html\">; N]</a>&gt;","synthetic":false,"types":["palette::cast::packed::Packed"]},{"text":"impl&lt;'a, S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a [T]</a>&gt; for &amp;'a <a class=\"struct\" href=\"palette/struct.Hsl.html\" title=\"struct palette::Hsl\">Hsl</a>&lt;S, T&gt;","synthetic":false,"types":["palette::hsl::Hsl"]},{"text":"impl&lt;'a, S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a mut [T]</a>&gt; for &amp;'a mut <a class=\"struct\" href=\"palette/struct.Hsl.html\" title=\"struct palette::Hsl\">Hsl</a>&lt;S, T&gt;","synthetic":false,"types":["palette::hsl::Hsl"]},{"text":"impl&lt;'a, Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a [T]</a>&gt; for &amp;'a <a class=\"struct\" href=\"palette/struct.Hsluv.html\" title=\"struct palette::Hsluv\">Hsluv</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::hsluv::Hsluv"]},{"text":"impl&lt;'a, Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a mut [T]</a>&gt; for &amp;'a mut <a class=\"struct\" href=\"palette/struct.Hsluv.html\" title=\"struct palette::Hsluv\">Hsluv</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::hsluv::Hsluv"]},{"text":"impl&lt;'a, S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a [T]</a>&gt; for &amp;'a <a class=\"struct\" href=\"palette/struct.Hsv.html\" title=\"struct palette::Hsv\">Hsv</a>&lt;S, T&gt;","synthetic":false,"types":["palette::hsv::Hsv"]},{"text":"impl&lt;'a, S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a mut [T]</a>&gt; for &amp;'a mut <a class=\"struct\" href=\"palette/struct.Hsv.html\" title=\"struct palette::Hsv\">Hsv</a>&lt;S, T&gt;","synthetic":false,"types":["palette::hsv::Hsv"]},{"text":"impl&lt;'a, S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a [T]</a>&gt; for &amp;'a <a class=\"struct\" href=\"palette/struct.Hwb.html\" title=\"struct palette::Hwb\">Hwb</a>&lt;S, T&gt;","synthetic":false,"types":["palette::hwb::Hwb"]},{"text":"impl&lt;'a, S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a mut [T]</a>&gt; for &amp;'a mut <a class=\"struct\" href=\"palette/struct.Hwb.html\" title=\"struct palette::Hwb\">Hwb</a>&lt;S, T&gt;","synthetic":false,"types":["palette::hwb::Hwb"]},{"text":"impl&lt;'a, Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a [T]</a>&gt; for &amp;'a <a class=\"struct\" href=\"palette/struct.Lab.html\" title=\"struct palette::Lab\">Lab</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::lab::Lab"]},{"text":"impl&lt;'a, Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a mut [T]</a>&gt; for &amp;'a mut <a class=\"struct\" href=\"palette/struct.Lab.html\" title=\"struct palette::Lab\">Lab</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::lab::Lab"]},{"text":"impl&lt;'a, Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a [T]</a>&gt; for &amp;'a <a class=\"struct\" href=\"palette/struct.Lch.html\" title=\"struct palette::Lch\">Lch</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::lch::Lch"]},{"text":"impl&lt;'a, Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a mut [T]</a>&gt; for &amp;'a mut <a class=\"struct\" href=\"palette/struct.Lch.html\" title=\"struct palette::Lch\">Lch</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::lch::Lch"]},{"text":"impl&lt;'a, Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a [T]</a>&gt; for &amp;'a <a class=\"struct\" href=\"palette/struct.Lchuv.html\" title=\"struct palette::Lchuv\">Lchuv</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::lchuv::Lchuv"]},{"text":"impl&lt;'a, Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a mut [T]</a>&gt; for &amp;'a mut <a class=\"struct\" href=\"palette/struct.Lchuv.html\" title=\"struct palette::Lchuv\">Lchuv</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::lchuv::Lchuv"]},{"text":"impl&lt;'a, S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a [T]</a>&gt; for &amp;'a <a class=\"struct\" href=\"palette/luma/struct.Luma.html\" title=\"struct palette::luma::Luma\">Luma</a>&lt;S, T&gt;","synthetic":false,"types":["palette::luma::luma::Luma"]},{"text":"impl&lt;'a, S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a mut [T]</a>&gt; for &amp;'a mut <a class=\"struct\" href=\"palette/luma/struct.Luma.html\" title=\"struct palette::luma::Luma\">Luma</a>&lt;S, T&gt;","synthetic":false,"types":["palette::luma::luma::Luma"]},{"text":"impl&lt;'a, Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a [T]</a>&gt; for &amp;'a <a class=\"struct\" href=\"palette/struct.Luv.html\" title=\"struct palette::Luv\">Luv</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::luv::Luv"]},{"text":"impl&lt;'a, Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a mut [T]</a>&gt; for &amp;'a mut <a class=\"struct\" href=\"palette/struct.Luv.html\" title=\"struct palette::Luv\">Luv</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::luv::Luv"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a [T]</a>&gt; for &amp;'a <a class=\"struct\" href=\"palette/struct.Oklab.html\" title=\"struct palette::Oklab\">Oklab</a>&lt;T&gt;","synthetic":false,"types":["palette::oklab::Oklab"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a mut [T]</a>&gt; for &amp;'a mut <a class=\"struct\" href=\"palette/struct.Oklab.html\" title=\"struct palette::Oklab\">Oklab</a>&lt;T&gt;","synthetic":false,"types":["palette::oklab::Oklab"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a [T]</a>&gt; for &amp;'a <a class=\"struct\" href=\"palette/struct.Oklch.html\" title=\"struct palette::Oklch\">Oklch</a>&lt;T&gt;","synthetic":false,"types":["palette::oklch::Oklch"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a mut [T]</a>&gt; for &amp;'a mut <a class=\"struct\" href=\"palette/struct.Oklch.html\" title=\"struct palette::Oklch\">Oklch</a>&lt;T&gt;","synthetic":false,"types":["palette::oklch::Oklch"]},{"text":"impl&lt;'a, S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a [T]</a>&gt; for &amp;'a <a class=\"struct\" href=\"palette/rgb/struct.Rgb.html\" title=\"struct palette::rgb::Rgb\">Rgb</a>&lt;S, T&gt;","synthetic":false,"types":["palette::rgb::rgb::Rgb"]},{"text":"impl&lt;'a, S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a mut [T]</a>&gt; for &amp;'a mut <a class=\"struct\" href=\"palette/rgb/struct.Rgb.html\" title=\"struct palette::rgb::Rgb\">Rgb</a>&lt;S, T&gt;","synthetic":false,"types":["palette::rgb::rgb::Rgb"]},{"text":"impl&lt;'a, Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a [T]</a>&gt; for &amp;'a <a class=\"struct\" href=\"palette/struct.Xyz.html\" title=\"struct palette::Xyz\">Xyz</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::xyz::Xyz"]},{"text":"impl&lt;'a, Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a mut [T]</a>&gt; for &amp;'a mut <a class=\"struct\" href=\"palette/struct.Xyz.html\" title=\"struct palette::Xyz\">Xyz</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::xyz::Xyz"]},{"text":"impl&lt;'a, Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a [T]</a>&gt; for &amp;'a <a class=\"struct\" href=\"palette/struct.Yxy.html\" title=\"struct palette::Yxy\">Yxy</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::yxy::Yxy"]},{"text":"impl&lt;'a, Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.0/std/primitive.slice.html\">&amp;'a mut [T]</a>&gt; for &amp;'a mut <a class=\"struct\" href=\"palette/struct.Yxy.html\" title=\"struct palette::Yxy\">Yxy</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::yxy::Yxy"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()