(function() {var implementors = {};
implementors["palette"] = [{"text":"impl&lt;C, T, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; N]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Alpha.html\" title=\"struct palette::Alpha\">Alpha</a>&lt;C, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"palette/struct.Alpha.html\" title=\"struct palette::Alpha\">Alpha</a>&lt;C, T&gt;: <a class=\"trait\" href=\"palette/cast/trait.ArrayCast.html\" title=\"trait palette::cast::ArrayCast\">ArrayCast</a>&lt;Array = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; N]</a>&gt;,&nbsp;</span>","synthetic":false,"types":["palette::alpha::alpha::Alpha"]},{"text":"impl&lt;C, T, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/struct.Alpha.html\" title=\"struct palette::Alpha\">Alpha</a>&lt;C, T&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; N]</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"palette/struct.Alpha.html\" title=\"struct palette::Alpha\">Alpha</a>&lt;C, T&gt;: <a class=\"trait\" href=\"palette/cast/trait.ArrayCast.html\" title=\"trait palette::cast::ArrayCast\">ArrayCast</a>&lt;Array = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; N]</a>&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;C, T, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Alpha.html\" title=\"struct palette::Alpha\">Alpha</a>&lt;C, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"palette/struct.Alpha.html\" title=\"struct palette::Alpha\">Alpha</a>&lt;C, T&gt;: <a class=\"trait\" href=\"palette/cast/trait.ArrayCast.html\" title=\"trait palette::cast::ArrayCast\">ArrayCast</a>&lt;Array = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; N]</a>&gt;,&nbsp;</span>","synthetic":false,"types":["palette::alpha::alpha::Alpha"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"palette/blend/trait.Premultiply.html\" title=\"trait palette::blend::Premultiply\">Premultiply</a>, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>&lt;C as <a class=\"trait\" href=\"palette/blend/trait.Premultiply.html\" title=\"trait palette::blend::Premultiply\">Premultiply</a>&gt;::<a class=\"associatedtype\" href=\"palette/blend/trait.Premultiply.html#associatedtype.Scalar\" title=\"type palette::blend::Premultiply::Scalar\">Scalar</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; N]</a>&gt; for <a class=\"struct\" href=\"palette/blend/struct.PreAlpha.html\" title=\"struct palette::blend::PreAlpha\">PreAlpha</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"palette/blend/struct.PreAlpha.html\" title=\"struct palette::blend::PreAlpha\">PreAlpha</a>&lt;C&gt;: <a class=\"trait\" href=\"palette/cast/trait.ArrayCast.html\" title=\"trait palette::cast::ArrayCast\">ArrayCast</a>&lt;Array = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>C::<a class=\"associatedtype\" href=\"palette/blend/trait.Premultiply.html#associatedtype.Scalar\" title=\"type palette::blend::Premultiply::Scalar\">Scalar</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; N]</a>&gt;,&nbsp;</span>","synthetic":false,"types":["palette::blend::pre_alpha::PreAlpha"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"palette/blend/trait.Premultiply.html\" title=\"trait palette::blend::Premultiply\">Premultiply</a>, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/blend/struct.PreAlpha.html\" title=\"struct palette::blend::PreAlpha\">PreAlpha</a>&lt;C&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>C::<a class=\"associatedtype\" href=\"palette/blend/trait.Premultiply.html#associatedtype.Scalar\" title=\"type palette::blend::Premultiply::Scalar\">Scalar</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; N]</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"palette/blend/struct.PreAlpha.html\" title=\"struct palette::blend::PreAlpha\">PreAlpha</a>&lt;C&gt;: <a class=\"trait\" href=\"palette/cast/trait.ArrayCast.html\" title=\"trait palette::cast::ArrayCast\">ArrayCast</a>&lt;Array = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>C::<a class=\"associatedtype\" href=\"palette/blend/trait.Premultiply.html#associatedtype.Scalar\" title=\"type palette::blend::Premultiply::Scalar\">Scalar</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; N]</a>&gt;,&nbsp;</span>","synthetic":false,"types":["palette::blend::Premultiply"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"palette/blend/trait.Premultiply.html\" title=\"trait palette::blend::Premultiply\">Premultiply</a>, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[&lt;C as <a class=\"trait\" href=\"palette/blend/trait.Premultiply.html\" title=\"trait palette::blend::Premultiply\">Premultiply</a>&gt;::<a class=\"associatedtype\" href=\"palette/blend/trait.Premultiply.html#associatedtype.Scalar\" title=\"type palette::blend::Premultiply::Scalar\">Scalar</a>]&gt; for <a class=\"struct\" href=\"palette/blend/struct.PreAlpha.html\" title=\"struct palette::blend::PreAlpha\">PreAlpha</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"palette/blend/struct.PreAlpha.html\" title=\"struct palette::blend::PreAlpha\">PreAlpha</a>&lt;C&gt;: <a class=\"trait\" href=\"palette/cast/trait.ArrayCast.html\" title=\"trait palette::cast::ArrayCast\">ArrayCast</a>&lt;Array = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>C::<a class=\"associatedtype\" href=\"palette/blend/trait.Premultiply.html#associatedtype.Scalar\" title=\"type palette::blend::Premultiply::Scalar\">Scalar</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; N]</a>&gt;,&nbsp;</span>","synthetic":false,"types":["palette::blend::pre_alpha::PreAlpha"]},{"text":"impl&lt;O, T, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; N]</a>&gt; for <a class=\"struct\" href=\"palette/cast/struct.Packed.html\" title=\"struct palette::cast::Packed\">Packed</a>&lt;O, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; N]</a>&gt;","synthetic":false,"types":["palette::cast::packed::Packed"]},{"text":"impl&lt;O, T, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/cast/struct.Packed.html\" title=\"struct palette::cast::Packed\">Packed</a>&lt;O, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; N]</a>&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; N]</a>","synthetic":false,"types":[]},{"text":"impl&lt;O, T, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"palette/cast/struct.Packed.html\" title=\"struct palette::cast::Packed\">Packed</a>&lt;O, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; N]</a>&gt;","synthetic":false,"types":["palette::cast::packed::Packed"]},{"text":"impl&lt;O, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;P&gt; for <a class=\"struct\" href=\"palette/cast/struct.Packed.html\" title=\"struct palette::cast::Packed\">Packed</a>&lt;O, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"palette/cast/struct.Packed.html\" title=\"struct palette::cast::Packed\">Packed</a>&lt;O, P&gt;: <a class=\"trait\" href=\"palette/cast/trait.UintCast.html\" title=\"trait palette::cast::UintCast\">UintCast</a>&lt;Uint = P&gt;,&nbsp;</span>","synthetic":false,"types":["palette::cast::packed::Packed"]},{"text":"impl&lt;O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/cast/struct.Packed.html\" title=\"struct palette::cast::Packed\">Packed</a>&lt;O, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u8.html\">u8</a>&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u8.html\">u8</a>","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/cast/struct.Packed.html\" title=\"struct palette::cast::Packed\">Packed</a>&lt;O, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u16.html\">u16</a>&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u16.html\">u16</a>","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/cast/struct.Packed.html\" title=\"struct palette::cast::Packed\">Packed</a>&lt;O, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u32.html\">u32</a>&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u32.html\">u32</a>","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/cast/struct.Packed.html\" title=\"struct palette::cast::Packed\">Packed</a>&lt;O, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u64.html\">u64</a>&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u64.html\">u64</a>","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/cast/struct.Packed.html\" title=\"struct palette::cast::Packed\">Packed</a>&lt;O, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u128.html\">u128</a>&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u128.html\">u128</a>","synthetic":false,"types":[]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Hsl.html\" title=\"struct palette::Hsl\">Hsl</a>&lt;S, T&gt;","synthetic":false,"types":["palette::hsl::Hsl"]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/struct.Hsl.html\" title=\"struct palette::Hsl\">Hsl</a>&lt;S, T&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>","synthetic":false,"types":[]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Hsl.html\" title=\"struct palette::Hsl\">Hsl</a>&lt;S, T&gt;","synthetic":false,"types":["palette::hsl::Hsl"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Hsluv.html\" title=\"struct palette::Hsluv\">Hsluv</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::hsluv::Hsluv"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/struct.Hsluv.html\" title=\"struct palette::Hsluv\">Hsluv</a>&lt;Wp, T&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>","synthetic":false,"types":[]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Hsluv.html\" title=\"struct palette::Hsluv\">Hsluv</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::hsluv::Hsluv"]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Hsv.html\" title=\"struct palette::Hsv\">Hsv</a>&lt;S, T&gt;","synthetic":false,"types":["palette::hsv::Hsv"]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/struct.Hsv.html\" title=\"struct palette::Hsv\">Hsv</a>&lt;S, T&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>","synthetic":false,"types":[]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Hsv.html\" title=\"struct palette::Hsv\">Hsv</a>&lt;S, T&gt;","synthetic":false,"types":["palette::hsv::Hsv"]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Hwb.html\" title=\"struct palette::Hwb\">Hwb</a>&lt;S, T&gt;","synthetic":false,"types":["palette::hwb::Hwb"]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/struct.Hwb.html\" title=\"struct palette::Hwb\">Hwb</a>&lt;S, T&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>","synthetic":false,"types":[]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Hwb.html\" title=\"struct palette::Hwb\">Hwb</a>&lt;S, T&gt;","synthetic":false,"types":["palette::hwb::Hwb"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Lab.html\" title=\"struct palette::Lab\">Lab</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::lab::Lab"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/struct.Lab.html\" title=\"struct palette::Lab\">Lab</a>&lt;Wp, T&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>","synthetic":false,"types":[]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Lab.html\" title=\"struct palette::Lab\">Lab</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::lab::Lab"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Lch.html\" title=\"struct palette::Lch\">Lch</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::lch::Lch"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/struct.Lch.html\" title=\"struct palette::Lch\">Lch</a>&lt;Wp, T&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>","synthetic":false,"types":[]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Lch.html\" title=\"struct palette::Lch\">Lch</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::lch::Lch"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Lchuv.html\" title=\"struct palette::Lchuv\">Lchuv</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::lchuv::Lchuv"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/struct.Lchuv.html\" title=\"struct palette::Lchuv\">Lchuv</a>&lt;Wp, T&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>","synthetic":false,"types":[]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Lchuv.html\" title=\"struct palette::Lchuv\">Lchuv</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::lchuv::Lchuv"]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 1]</a>&gt; for <a class=\"struct\" href=\"palette/luma/struct.Luma.html\" title=\"struct palette::luma::Luma\">Luma</a>&lt;S, T&gt;","synthetic":false,"types":["palette::luma::luma::Luma"]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/luma/struct.Luma.html\" title=\"struct palette::luma::Luma\">Luma</a>&lt;S, T&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 1]</a>","synthetic":false,"types":[]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"palette/luma/struct.Luma.html\" title=\"struct palette::luma::Luma\">Luma</a>&lt;S, T&gt;","synthetic":false,"types":["palette::luma::luma::Luma"]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"palette/luma/struct.Luma.html\" title=\"struct palette::luma::Luma\">Luma</a>&lt;S, T&gt;","synthetic":false,"types":["palette::luma::luma::Luma"]},{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/luma/struct.Luma.html\" title=\"struct palette::luma::Luma\">Luma</a>&lt;S, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u8.html\">u8</a>&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u8.html\">u8</a>","synthetic":false,"types":[]},{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/luma/struct.Luma.html\" title=\"struct palette::luma::Luma\">Luma</a>&lt;S, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u16.html\">u16</a>&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u16.html\">u16</a>","synthetic":false,"types":[]},{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/luma/struct.Luma.html\" title=\"struct palette::luma::Luma\">Luma</a>&lt;S, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u32.html\">u32</a>&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u32.html\">u32</a>","synthetic":false,"types":[]},{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/luma/struct.Luma.html\" title=\"struct palette::luma::Luma\">Luma</a>&lt;S, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u64.html\">u64</a>&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u64.html\">u64</a>","synthetic":false,"types":[]},{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/luma/struct.Luma.html\" title=\"struct palette::luma::Luma\">Luma</a>&lt;S, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u128.html\">u128</a>&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u128.html\">u128</a>","synthetic":false,"types":[]},{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/luma/struct.Luma.html\" title=\"struct palette::luma::Luma\">Luma</a>&lt;S, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.f32.html\">f32</a>&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.f32.html\">f32</a>","synthetic":false,"types":[]},{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/luma/struct.Luma.html\" title=\"struct palette::luma::Luma\">Luma</a>&lt;S, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.f64.html\">f64</a>&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.f64.html\">f64</a>","synthetic":false,"types":[]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Luv.html\" title=\"struct palette::Luv\">Luv</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::luv::Luv"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/struct.Luv.html\" title=\"struct palette::Luv\">Luv</a>&lt;Wp, T&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>","synthetic":false,"types":[]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Luv.html\" title=\"struct palette::Luv\">Luv</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::luv::Luv"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Oklab.html\" title=\"struct palette::Oklab\">Oklab</a>&lt;T&gt;","synthetic":false,"types":["palette::oklab::Oklab"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/struct.Oklab.html\" title=\"struct palette::Oklab\">Oklab</a>&lt;T&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Oklab.html\" title=\"struct palette::Oklab\">Oklab</a>&lt;T&gt;","synthetic":false,"types":["palette::oklab::Oklab"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Oklch.html\" title=\"struct palette::Oklch\">Oklch</a>&lt;T&gt;","synthetic":false,"types":["palette::oklch::Oklch"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/struct.Oklch.html\" title=\"struct palette::Oklch\">Oklch</a>&lt;T&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Oklch.html\" title=\"struct palette::Oklch\">Oklch</a>&lt;T&gt;","synthetic":false,"types":["palette::oklch::Oklch"]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>&gt; for <a class=\"struct\" href=\"palette/rgb/struct.Rgb.html\" title=\"struct palette::rgb::Rgb\">Rgb</a>&lt;S, T&gt;","synthetic":false,"types":["palette::rgb::rgb::Rgb"]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/rgb/struct.Rgb.html\" title=\"struct palette::rgb::Rgb\">Rgb</a>&lt;S, T&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>","synthetic":false,"types":[]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"palette/rgb/struct.Rgb.html\" title=\"struct palette::rgb::Rgb\">Rgb</a>&lt;S, T&gt;","synthetic":false,"types":["palette::rgb::rgb::Rgb"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Xyz.html\" title=\"struct palette::Xyz\">Xyz</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::xyz::Xyz"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/struct.Xyz.html\" title=\"struct palette::Xyz\">Xyz</a>&lt;Wp, T&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>","synthetic":false,"types":[]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Xyz.html\" title=\"struct palette::Xyz\">Xyz</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::xyz::Xyz"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Yxy.html\" title=\"struct palette::Yxy\">Yxy</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::yxy::Yxy"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"palette/struct.Yxy.html\" title=\"struct palette::Yxy\">Yxy</a>&lt;Wp, T&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.array.html\">; 3]</a>","synthetic":false,"types":[]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"palette/struct.Yxy.html\" title=\"struct palette::Yxy\">Yxy</a>&lt;Wp, T&gt;","synthetic":false,"types":["palette::yxy::Yxy"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()