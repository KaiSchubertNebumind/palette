(function() {var implementors = {};
implementors["palette"] = [{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, T:&nbsp;<a class=\"trait\" href=\"palette/stimulus/trait.Stimulus.html\" title=\"trait palette::stimulus::Stimulus\">Stimulus</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"palette/struct.Alpha.html\" title=\"struct palette::Alpha\">Alpha</a>&lt;C, T&gt;","synthetic":false,"types":["palette::alpha::alpha::Alpha"]},{"text":"impl&lt;C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"palette/blend/struct.PreAlpha.html\" title=\"struct palette::blend::PreAlpha\">PreAlpha</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"palette/blend/trait.Premultiply.html\" title=\"trait palette::blend::Premultiply\">Premultiply</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C::<a class=\"associatedtype\" href=\"palette/blend/trait.Premultiply.html#associatedtype.Scalar\" title=\"type palette::blend::Premultiply::Scalar\">Scalar</a>: <a class=\"trait\" href=\"palette/stimulus/trait.Stimulus.html\" title=\"trait palette::stimulus::Stimulus\">Stimulus</a>,&nbsp;</span>","synthetic":false,"types":["palette::blend::pre_alpha::PreAlpha"]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"palette/struct.Hsl.html\" title=\"struct palette::Hsl\">Hsl</a>&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/stimulus/trait.Stimulus.html\" title=\"trait palette::stimulus::Stimulus\">Stimulus</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"palette/struct.RgbHue.html\" title=\"struct palette::RgbHue\">RgbHue</a>&lt;T&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["palette::hsl::Hsl"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"palette/struct.Hsluv.html\" title=\"struct palette::Hsluv\">Hsluv</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/num/trait.Real.html\" title=\"trait palette::num::Real\">Real</a> + <a class=\"trait\" href=\"palette/num/trait.Zero.html\" title=\"trait palette::num::Zero\">Zero</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"palette/struct.LuvHue.html\" title=\"struct palette::LuvHue\">LuvHue</a>&lt;T&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["palette::hsluv::Hsluv"]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"palette/struct.Hsv.html\" title=\"struct palette::Hsv\">Hsv</a>&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/stimulus/trait.Stimulus.html\" title=\"trait palette::stimulus::Stimulus\">Stimulus</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"palette/struct.RgbHue.html\" title=\"struct palette::RgbHue\">RgbHue</a>&lt;T&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["palette::hsv::Hsv"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"palette/struct.LabHue.html\" title=\"struct palette::LabHue\">LabHue</a>&lt;T&gt;","synthetic":false,"types":["palette::hues::LabHue"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"palette/struct.LuvHue.html\" title=\"struct palette::LuvHue\">LuvHue</a>&lt;T&gt;","synthetic":false,"types":["palette::hues::LuvHue"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"palette/struct.RgbHue.html\" title=\"struct palette::RgbHue\">RgbHue</a>&lt;T&gt;","synthetic":false,"types":["palette::hues::RgbHue"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"palette/struct.OklabHue.html\" title=\"struct palette::OklabHue\">OklabHue</a>&lt;T&gt;","synthetic":false,"types":["palette::hues::OklabHue"]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"palette/struct.Hwb.html\" title=\"struct palette::Hwb\">Hwb</a>&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/stimulus/trait.Stimulus.html\" title=\"trait palette::stimulus::Stimulus\">Stimulus</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"palette/struct.RgbHue.html\" title=\"struct palette::RgbHue\">RgbHue</a>&lt;T&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["palette::hwb::Hwb"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"palette/struct.Lab.html\" title=\"struct palette::Lab\">Lab</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/num/trait.Zero.html\" title=\"trait palette::num::Zero\">Zero</a>,&nbsp;</span>","synthetic":false,"types":["palette::lab::Lab"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"palette/struct.Lch.html\" title=\"struct palette::Lch\">Lch</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/num/trait.Zero.html\" title=\"trait palette::num::Zero\">Zero</a> + <a class=\"trait\" href=\"palette/num/trait.Real.html\" title=\"trait palette::num::Real\">Real</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"palette/struct.LabHue.html\" title=\"struct palette::LabHue\">LabHue</a>&lt;T&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["palette::lch::Lch"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"palette/struct.Lchuv.html\" title=\"struct palette::Lchuv\">Lchuv</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/num/trait.Zero.html\" title=\"trait palette::num::Zero\">Zero</a> + <a class=\"trait\" href=\"palette/num/trait.Real.html\" title=\"trait palette::num::Real\">Real</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"palette/struct.LuvHue.html\" title=\"struct palette::LuvHue\">LuvHue</a>&lt;T&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["palette::lchuv::Lchuv"]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"palette/luma/struct.Luma.html\" title=\"struct palette::luma::Luma\">Luma</a>&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/stimulus/trait.Stimulus.html\" title=\"trait palette::stimulus::Stimulus\">Stimulus</a>,&nbsp;</span>","synthetic":false,"types":["palette::luma::luma::Luma"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"palette/struct.Luv.html\" title=\"struct palette::Luv\">Luv</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/num/trait.Zero.html\" title=\"trait palette::num::Zero\">Zero</a>,&nbsp;</span>","synthetic":false,"types":["palette::luv::Luv"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"palette/struct.Oklab.html\" title=\"struct palette::Oklab\">Oklab</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/num/trait.Zero.html\" title=\"trait palette::num::Zero\">Zero</a>,&nbsp;</span>","synthetic":false,"types":["palette::oklab::Oklab"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"palette/struct.Oklch.html\" title=\"struct palette::Oklch\">Oklch</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/num/trait.Zero.html\" title=\"trait palette::num::Zero\">Zero</a> + <a class=\"trait\" href=\"palette/num/trait.One.html\" title=\"trait palette::num::One\">One</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"palette/struct.OklabHue.html\" title=\"struct palette::OklabHue\">OklabHue</a>&lt;T&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["palette::oklch::Oklch"]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"palette/rgb/struct.Rgb.html\" title=\"struct palette::rgb::Rgb\">Rgb</a>&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/stimulus/trait.Stimulus.html\" title=\"trait palette::stimulus::Stimulus\">Stimulus</a>,&nbsp;</span>","synthetic":false,"types":["palette::rgb::rgb::Rgb"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"palette/struct.Xyz.html\" title=\"struct palette::Xyz\">Xyz</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/num/trait.Zero.html\" title=\"trait palette::num::Zero\">Zero</a>,&nbsp;</span>","synthetic":false,"types":["palette::xyz::Xyz"]},{"text":"impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"palette/struct.Yxy.html\" title=\"struct palette::Yxy\">Yxy</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/num/trait.Zero.html\" title=\"trait palette::num::Zero\">Zero</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Wp: <a class=\"trait\" href=\"palette/white_point/trait.WhitePoint.html\" title=\"trait palette::white_point::WhitePoint\">WhitePoint</a>&lt;T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"palette/struct.Xyz.html\" title=\"struct palette::Xyz\">Xyz</a>&lt;Wp, T&gt;: <a class=\"trait\" href=\"palette/convert/trait.IntoColorUnclamped.html\" title=\"trait palette::convert::IntoColorUnclamped\">IntoColorUnclamped</a>&lt;Self&gt;,&nbsp;</span>","synthetic":false,"types":["palette::yxy::Yxy"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()