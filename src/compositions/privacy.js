import { useEffect } from 'react'

import { Box, Container, Heading, Text } from '@chakra-ui/react'

import styled from '@emotion/styled'

const StyledBox = styled(Box)`
  p {
    margin: 0 0 15px;
  }

  p > a {
    color: var(--chakra-colors-blue);
  }

  .pp-hdr {
    font-size: 1.1em;
    color: var(--chakra-colors-blue);
    font-weight: 700;
    text-transform: uppercase;
  }

  hr.no_line {
    background: none;
    color: transparent;
  }

  hr {
    border-color: currentcolor;
    outline-color: currentcolor;
    clear: both;
    display: block;
    border: none;
    outline: none;
  }

  ul {
    color: var(--chakra-colors-blue);
    margin: 0 0 15px 30px;
  }

  li > p {
    color: var(--chakra-colors-chakra-body-text);
  }
`

const privacyHTML = `<p class="pp-hdr">This Privacy Policy applies to the sites and apps where it appears.</p>
<p>This Policy describes how we treat personal information on the websites where it is located. Your use of this website indicates that you agree to our collection, disclosure, use, of your information as described in this Privacy Policy.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">We collect information from and about you.</p>
<p><b>We collect contact information</b>. For example, we might collect your name and street address if you register on our site or in our app. We might also collect your phone number or email address.</p>
<p><b>We collect information you submit or post</b>. We collect the information you post in a public space on our site. We also collect information when you contact us.</p>
<p><b>We collect demographic information. </b>We may collect information like your gender, age, date of birth and marital status. We may also collect your zip code. We might collect this when you contact us.</p>
<p><b>We collect additional information depending upon which services you are interested in.</b> For example, if you request information about car insurance, we will collect additional information including information about your vehicle. If you request information about home insurance, we will collect additional information including information about your homeowner status and the property where you live. If you request information about life insurance, we will collect additional information including information about your occupation, physical activity level, veteran status, tobacco use, DUI history, height and weight, and medical history. We also collect information about your current insurance coverage.</p>
<p><b>We collect usage and device/location information. </b>If you use our website, we may collect information about the browser you’re using. We might look at what site you came from, or what sites you visit when you leave us.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">We collect information in different ways.</p>
<p><b>We collect information directly from you</b>. For example, we collect information from you if you use our website, request insurance information or register for any services. We also collect information if you contact us. You may have the option to share a picture of your driver’s license barcode which we will use to collect information about you from third-party providers. See the section below entitled, “We may share information with third parties” for more information.</p>
<p><b>We collect information from you passively</b>. We use tracking tools like browser cookies and web beacons. We do this on our websites and in emails that we send to you. We collect information about users over time when you use this website. We may have third parties collect personal information this way. Learn more about these tools and how you can control them below in the section “About Our Ads”.</p>
<p><b>We get information about you from third parties.</b> For example, our business partners may give us information about you, including contact, demographic and other personal information. These may include insurance providers, credit reporting agencies and other data companies. Social media platforms may also give us information about you.</p>
<p><b>We combine information. </b>For example, we may combine information we get from a third party with information we already have. We may also combine information collected from you on our various platforms. We may also obtain information about you based on other websites you have visited.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">We use information as disclosed and described here.</p>
<p><b>We use information to respond to your requests or questions</b>. For example, we and our business partners use your information to select and provide you with information about insurance products you may be interested in. We may also use your information to respond to your customer feedback. We may use your information to notify you if you win a contest or sweepstakes.</p>
<p><b>We use information to improve our products and services</b>. We may use your information to make our website and products better. We might use your information to customize your experience with us.</p>
<p><b>We use information for security purposes. </b>We may use your information to protect our company and our customers. We also use information to protect our websites.</p>
<p><b>We use information for marketing purposes. </b>For example, we might provide you with information, special offers, and advertisements about products. This information may be from or on behalf of insurance providers or other third parties. We might tell you about new features or updates. We might also use your information to serve you ads about products and offers. By submitting your email address and/or phone number to us, you authorize us to use that email address and phone number to contact you periodically, including by the use of an auto-dialer and pre-recorded messages, concerning (i) your quote requests, (ii) about the website or our services and (iii) information or offers that we feel may be of interest to you. To learn about your choices for these communications, read the choices. We may also allow our partners to provide you with information about new products and special offers, including offers for insurance products and services.</p>
<p><b>We use information to communicate with you. </b>For example, we will communicate with you about our relationship. We may contact you about your feedback. We might also contact you about this Policy or our website Terms.</p>
<p><b>We may also use push notifications through your browser and on our mobile apps. </b>We will send you push notifications about insurance related offers and services. We may also send you push notifications for other reasons like friend requests, prompts to view your trips, or product updates.</p>
<p><b>We use information as otherwise permitted by law or as we may notify you.</b></p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">We may share information with third parties.</p>
<p><b>We will share information with third parties who perform services on our behalf</b>. For example, we share information with vendors who send emails for us. We may also share information with companies that operate our websites or run a promotion.</p>
<p><b>We will share information with our business partners and other third parties</b><i><b>. </b></i>These partners may send you information about products and services by telephone, text, fax, mail or email. If you use our website or app we will share your information, including name, address, email, telephone number, and date of birth, which you provided to us or that we obtained from third-party sources, with insurance companies or other third parties that may provide it to insurance companies. Insurance companies that receive your information may use it to assist in providing you offers for insurance. You further acknowledge and agree that each insurance company that receives your quote request from this website or from our affiliates may confirm your information through the use of a consumer reporting agency, which may include among other things, your driving record and/or credit score to determine eligibility and accurate rates.</p>
<p><b>We will share information if we think we have to in order to comply with the law or to protect ourselves. </b>For example, we will share information to respond to a court order or subpoena. This may include information that is discoverable in connection with accident investigations, litigation or both. We may share it if a government agency or investigatory body requests. We might share information when we are investigating potential fraud.</p>
<p><b>We may share information with any successor to all or part of our business. </b>For example, if part of our business was sold we may give our customer list as part of that transaction.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">You have certain choices about how we use your information.</p>
<p><b>You can opt out of receiving our marketing emails.</b> To stop receiving our promotional emails, email customer support at admin@blueskyroi.com or follow the instructions in any promotional message you get from us. Even if you opt out of getting marketing messages, we will still send you transactional messages. These include responses to your questions. If you opt-out of receiving marketing communications from our business partners with whom we have shared your information, you will still receive marketing communications from us and any other business partners with whom your information was shared.</p>
<p><b>You can request that we stop sharing information with third parties for their marketing purposes.</b> To opt out of having us share your information with third parties for their promotional purposes, email us at admin@blueskyroi.com.</p>
<p><b>You can control cookies and tracking tools.</b> To learn how to manage how we – and our vendors – use cookies and other tracking tools, and to read our <b>Do Not Track </b>policy, please see below section “About Our Ads”.  </p>
<p><b>You can control tools on your mobile devices. </b>For example, you can turn off push notifications on your phone through your phone’s settings.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr"><b>About Our Ads</b></p>
<p><b>We use tracking technologies.</b></p>
<p>We collect personal information about users over time and across different websites when you use this website or service. We also have third parties that collect personal information this way. To do this, we use several common tracking tools. Our vendors may also use these tools. In this policy “we” and “us” refers to both Safeautodirect.com and our vendors. These may include browser cookies. We may also use web beacons, flash cookies, and similar technologies.</p>
<p><b>We use tracking technologies for a variety of reasons.</b></p>
<p>We use tracking tools, including cookies, on our websites. Third parties also use cookies on our sites. Cookies are small files that download when you access certain websites. To learn more, visit <a href="http://www.allaboutcookies.org/" target="_blank"><u>here</u></a>. These pages also explain how you can manage and delete cookies. We use tracking tools:</p>
<ul>
	<li><p>To recognize new or past customers.</p></li>
	<li><p>To improve our website and to better understand your visits on our 	platforms.</p></li>
	<li><p>To integrate with third party social media websites.</p></li>
	<li><p>To serve you with interest-based or targeted advertising (see below 	for more on interest-based advertising).</p></li>
	<li><p>To observe your behaviors and browsing activities over time across 	multiple websites or other platforms.</p></li>
	<li><p>To better understand the interests of our customers and our website 	visitors.</p></li>
	<li><p>To customize your experience when we show ads to you.</p></li>
</ul>
<p><b>We engage in interest-based advertising.</b></p>
<p>We and our partners display interest-based advertising using information gathered about you over time across multiple websites or other platforms. This might include apps.</p>
<p>Interest-based advertising or “online behavioral advertising” includes ads served to you after you leave our website, encouraging you to return. They also include ads we think are relevant based on your browsing habits or online activities. These ads might be served on websites or on apps. They might also be served in emails. We might serve these ads, or third parties may serve ads. They might be about our products or other companies’ products.</p>
<p><b>How do we gather relevant information about you for interest-based advertising?</b></p>
<p>To decide what is relevant to you, we use information you make available to us when you interact with us, our affiliates, and other third parties. We gather this information using the tracking tools described above. For example, we or our partners might look at your purchases or browsing behaviors. We or our partners might also look at your location. We might look at these activities on our platforms or the platforms of others.</p>
<p>We work with third parties who help gather this information. These third parties might link your name or email address to other information they collect. That might include past purchases made offline or online. Or, it might include online usage information.</p>
<p><b>You can control certain tracking tools.</b></p>
<p>Your browser may give you the ability to control cookies. How you do so depends on the type of cookie. Certain browsers can be set to reject browser cookies. To find out more about how to enable, disable, or delete cookies from your web browser, please visit <a href="http://www.allaboutcookies.org/" target="_blank"><u>here</u></a>. To control flash cookies, which we may use on certain websites from time to time, you can go <a href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html" target="_blank"><u>here</u></a>. Why? Because flash cookies cannot be controlled through your browser settings.</p>
<p><b>Our Do Not Track Policy: Some browsers have “do not track” features that allow you to tell a website not to track you. These features are not all uniform. We do not currently respond to those signals.</b> If you block cookies, certain features on our sites may not work. If you block or reject cookies, not all of the tracking described here will stop.</p>
<p>Certain options you select are browser and device specific.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">YOUR CALIFORNIA PRIVACY RIGHTS</p>
<p>Consumers residing in California have certain rights with respect to their personal information under the California Consumer Privacy Act or (“CCPA”) (California Civil Code Section 1798.100 et seq.) and the “Shine the Light” Law (California Civil Code Section 1798.83). If you are a California resident, this section applies to you.</p>
<p><i><b>California Consumer Privacy Act</b></i></p>
<p><i>Additional Disclosures Related to the Collection, Use, Disclosure and Sale of Personal Information</i></p>
<p><b>Collection and Use of Personal Information:</b> In the Preceding 12 months, we have collected the following categories of personal information: identifiers, categories of personal information described in subdivision (e) of Section 1798.80 Including financial information, commercial information, biometric information, internet or other electronic network activity information, geolocation data, professional or employment-related information, education information, and inferences draw from any of the information identified. For examples of more specific information we collect and the sources of such collection, please see "We collect information from and about you" and "We collect information in different ways" above. We collect personal information for the business and commercial purposes described in "We use information as disclosed and described" above.</p>
<p><b>Disclosure of Personal Information:</b> We may share your personal information with third parties as described in the "We may share information with third parties" section above. In the preceding 12 months, we may have disclosed the following categories of personal information for business or commercial purposes: identifiers, categories of personal information described in subdivision (e) of Section 1798.80 including financial information, commercial information, biometric information, internet or other electronic network activity information, geolocation data, professional or employment-related information, education information, and inferences draw from any of the information identified.</p>
<p><b>Sale of Personal Information:</b> California law requires that we provide transparency about personal information we "sell," which for the purposes of the CCPA, means scenarios in which personal information is shared with third parties in exchange for valuable consideration. In the preceding 12 months, we have "sold" the following categories of personal information: identifiers, categories of personal information described in subdivision (e) of Section 1798.80 including financial information, commercial information, biometric information, internet or other electronic network activity information, geolocation data, professional or employment-related information, education information, and inferences draw from any of the information identified. California consumers above the age of 16 have the right to opt out of these sales at any time. We do not knowingly sell personal information about consumers under the age of 16. Please contact us at admin@blueskyroi.com to make an opt-out request.</p>
<p><i>Your Consumer Rights</i></p>
<p>If you are a California resident, you have the right to (1) request more information about the categories and specific pieces of personal information we have collected, sold and disclosed for a business purpose in the last 12 months, (2) request deletion of your personal information, (3) opt out of the sale of your personal information, if applicable, and (4) be free from discrimination for exercising your rights under the CCPA. You may make these requests by submitting a request by emailing us at admin@blueskyroi.com.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">We store information in the United States.</p>
<p>Information we maintain may be stored within the United States. If you live outside of the United States, you understand and agree that you are transferring your information to the United States. Our platforms are subject to U.S. laws, which may not afford the same level of protection as those in your country.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">We may link to other sites or apps from our websites, platforms, or share information with third parties we don’t control.</p>
<p>If you click on a third-party link, you will be taken to another website or platform we do not control. This policy does not apply to the privacy practices of that website or platform. Read other companies’ privacy policies carefully. We are not responsible for these third parties.</p>
<p>Our site may also serve third party content that contains their own cookies or tracking technologies. To learn more please read the section above “About Our Ads”. We do not control the use of those technologies.</p>
<p><b>Feel free to contact us if you have more questions.</b></p>
<p>If you have any questions about this Policy, please email us at admin@blueskyroi.com.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<h3 class="pp-hdr">We may update this Policy.</h3>
<p>From time to time we may change our privacy policies. We will notify you by email or by means of a notice on the website of any material changes to our Policy as required by law. We will also post an updated copy on our website. Please check our site periodically for updates.</p>`

const Privacy = () => {
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 100)
  }, [])

  return (
    <Box overflowX="clip" w="full">
      <Container pt={[100, 160, 170]} pb={[20, 30, 40]} maxW="1410px">
        <Heading
          fontWeight={800}
          fontSize={['48px', '50px', '54px', '58px', '60px']}
          color="white"
          mb={{ base: 6, lg: 8 }}
          px={[0, 5, 10]}
          lineHeight={1}
        >
          PRIVACY POLICY{' '}
          <Text
            display={{ base: 'inline-block', lg: 'inline' }}
            fontSize={[16, 18, 24]}
            fontWeight={600}
            color="black"
            mt={5}
          >
            YOUR DATA PRIVACY IS SAFE WITH US
          </Text>
        </Heading>
        <Box
          p={[5, 10]}
          fontSize={[16, 18, 24]}
          borderRadius={[25, 32, 50]}
          bg="#cccccc80"
          css={{ backdropFilter: 'blur(10px)' }}
          boxShadow="0 0 20px #22222280"
        >
          <StyledBox dangerouslySetInnerHTML={{ __html: privacyHTML }} />
        </Box>
      </Container>
    </Box>
  )
}

export default Privacy
