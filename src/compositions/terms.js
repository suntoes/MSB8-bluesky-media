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

const privacyHTML = `<p class="pp-hdr">The following terms and conditions apply to all website development / design services provided by BlueSky Media.</p>
<p>This Services Agreement ("Agreement") contains the complete terms and conditions which govern your subscription of Website Design, Development and other Internet-related services provided by BlueSky Investments LLC ("Services"). As used in this Agreement, "BlueSky Media" means BlueSky Investments LLC and "Client", "you", or "your" means you. You acknowledge that you have read the Agreement, and you agree to its terms and conditions and all policies posted on the BlueSky Media site. As referred to in this Agreement, "Site" refers to a World Wide Web site and "BlueSky Media Site" refers to the Site located at the URL https://www.blueskyroi.com or any other successor Sites owned or maintained by BlueSky Media.</p>
<p>WHEREAS Client desires to engage BlueSky to develop, create, test, design and deliver web sites as work made for hire to make websites available for browsing on the internet; and</p>
<p>WHEREAS BlueSky is interested in undertaking such work to perform for Client through one or more of the following: (a) web development; (b) server administration; (c) copywriting (d) expert marketing consulting and/or (e) design.</p>
<p>WHEREAS Client and BlueSky mutually desire to set forth the terms applicable to such work;</p>
<p>NOW THEREFORE, in consideration of the mutual covenants and conditions herein contained, the receipt and sufficiency of which are hereby recognized, the parties mutually agree as follows:</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr"><b>1. Definitions</b></p>
<p><b>A. “Website”</b> means a collection of web pages and related content that is identified by a common domain name and published on at least one web server.</p>
<p><b>B. "Web Page"</b>means a hypertext document provided by a website and displayed to a user in a web browser.</p>
<p><b>C. "Web Server"</b>means computer software and underlying hardware that accepts requests via HTTP, the network protocol created to distribute web pages, or its secure variant HTTPS.</p>
<p><b>D. "Client"</b>means the client signing the agreement.</p>
<p><b>E. "Partner"</b>means a person or organization attached or connected to either BlueSky or Client. </p>
<p><b>F. "Agency"</b>means the agent signing the IO, where applicable, on behalf of Client(s).</p>
<p><b>G. "Agreement"</b>means these terms and conditions, any addendums, BlueSky’s Policies and any documents incorporated by reference herein, collectively. </p>
<p><b>H. "End-user"</b>means users of a Network Website.</p>
<p><b>I. "BlueSky Website"</b>means websites that are that are owned, operated, or controlled by BlueSky.</p>
<p><b>J. "BlueSky Media" of "BlueSky"</b>means BlueSky Investments, LLC. </p>
<p><b>K. "Web Development Services"</b>means the services provided by BlueSky Media.</p>
<p><b>L. "Client Website"</b>means websites that are that are owned, operated, or controlled by Client.</p>
<p><b>M. "Personally Identifiable Information" or “PII"</b>means individually identifiable information from or about a consumer, as interpreted by the United States Federal Trade Commission.</p>
<p><b>N. "Representative"</b>means, as to an entity and/or its Affiliate(s), any director, officer, employee, consultant, contractor, agent, and/or attorney.</p>
<p><b>O. "Serve"</b>means to deliver traffic in the form of impressions, clicks, leads or other similar, agreed upon method.</p>
<p><b>P. "Traffic"</b>means the attraction of online visitors or viewers to a website.</p>
<p><b>Q. "Employee"</b>means a person employed by BlueSky for wages or salary.</p>
<p><b>R. "Addendum"</b>means an attachment to a contract that modifies the terms and conditions of the original contract.</p>
<p><b>S. "Custom Material"</b>means any work performed or deliverables by BlueSky outside the scope of this agreement.</p>
<p><b>T. "Retainer"</b>means an agreement for a work-for-hire recurring contract.</p>
<p><b>U. "One-off"</b>means an agreement where Client only hires BlueSky for a single activity.</p>
<p><b>V. "Initial Term"</b>means the length of time this agreement will remain in effect.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">2. Acceptance</p>
<p>It is not necessary for any Client to have signed an acceptance of these terms and conditions for them to apply. If a Client accepts a quote then the Client will be deemed to have satisfied themselves as to the terms applying and have accepted these terms and conditions in full.</p>
<p>Please read these terms and conditions carefully. Any purchase or use of our services implies that you have read and accepted our terms and conditions.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">3. Developer Responsibilities</p>
<p>A. Scope of Work</p>
<p>Client hereby retains the services of BlueSky to design, develop and host websites and Intranet (collectively the “websites”) for Client in accordance with the proposal submitted by BlueSky Media to Client the "Proposal")the terms of which are expressly incorporated herein by reference.</p>
<p>B.	The “Schedule” for the development of Client websites and Intranet will be submitted by BlueSky Medi to Client.</p>
<p>C.	Changes</p>
<p>Changes to this Agreement or to any of the specifications of the websites or Intranet in any of the specifications thereof shall become effective only when a written change request is executed by the Executive Director of Client and BlueSky Media. BlueSky Media agrees to notify Client promptly of any factor, occurrence, or event coming to its attention that may affect BlueSky Media’s ability to meet the requirements of this Agreement, or that is likely to occasion any material delay in the Schedule. From time to time, the Parties may (but are not obligated to) negotiate and execute additional contract addendums. Each addendum shall constitute a separate contract between the Parties, which contract shall be deemed to incorporate and include this Agreement even if this Agreement is not attached to the applicable addendum. To the extent that anything in or associated with this Agreement is in conflict or inconsistent with an addendum, the addendum shall take precedence unless otherwise stated to the contrary herein. This Agreement constitutes the entire and only agreement between the Parties and supersedes all prior or contemporaneous agreements, representations, warranties and understandings.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">4. Payments</p>
<p>A. Invoices</p>
<p> Invoices for one-off projects will be provided by BlueSky Media upon completion but before publishing the live website. Invoices are normally sent via email; however, the Client may choose to receive hard copy invoices. Invoices are due upon receipt.</p>
<p>B. Service Charges</p>
<p>Charges for services to be provided by BlueSky Media are defined in the project quotation that the Client receives via e-mail. Quotations are valid for a period of 15 days. BlueSky Media  reserves the right to alter or decline to provide a quotation after expiry of the 15 days.</p>
<p>C. Payment Advance</p>
<p>Unless agreed otherwise with the Client, all website design services require an advance payment of a minimum of fifty (50) percent of the project quotation total before the work is supplied to the Client for review. The remaining fifty (50) percent of the project quotation total due upon completion of the work, prior to upload to the server or release of materials.</p>
<p>D. Payment Methods</p>
<p>Payment for services is due by cheque, ACH or bank transfer. Cheques should be made payable to BlueSky Investments LLC and sent to BlueSky Investments LLC. Bank details will be made available on invoices. Bank wires transfers will include an additional $75 wire fee.</p>
<p>E. Operational Expenses</p>
<p>The prices set forth above are inclusive of BlueSky Media's operational expenses. Except as expressly agreed otherwise in writing by Client, BlueSky Media shall bear all of its own expenses arising from its performance of its obligations under this Agreement, including (without limitation) expenses for facilities, work spaces, utilities, management, clerical and reproduction services, supplies, and the like. Client shall have no obligation to provide office space, work facilities, equipment, clerical services, programming services, or the like.</p>
<p>F. Additional Expenses</p>
<p>Client agrees to reimburse BlueSky Media for any additional expenses necessary for the completion of the work. Examples include purchase of special fonts, custom themes, stock photography etc. Prior to purchase, BlueSky will obtain written consent from Client.</p>
<p>G. Failure to Make Payment</p>
<p>The failure by Client to make timely payment within thirty (30) days after the date of invoice shall constitute material breach. Client is responsible for all reasonable expenses (including, but not limited to, attorney’s fees and costs) incurred by BlueSky in collecting any amounts due plus interest. If the Client in default maintains any information or files on BlueSky's Web space, BlueSky will, at its discretion, remove all such material from its web space. BlueSky is not responsible for any loss of data incurred due to the removal of the service. Removal of such material does not relieve the Client of the obligation to pay any outstanding charges assessed to the Client's account. Cheques returned for insufficient funds will result in the Client's account being immediately be considered to be in default until full payment is received.</p>
<p>H.	Termination</p>
<p>Client agrees that its payment obligations will survive the termination of this Agreement and any documents incorporated by reference herein.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">5. Client Review</p>
<p>BlueSky Media will grant the Client 2 revisions by providing the Client with an opportunity to review the appearance and content of the website once during the design phase and once after the overall website development is completed. At the completion of the project, such materials will be deemed to be accepted and approved unless the Client notifies BlueSky Media otherwise within seven (7) days of the date the materials are made available to the Client.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">6. Turnaround Time and Content Control</p>
<p>BlueSky Media will install and publicly post or supply the Client's website by the date specified in the project proposal, or at date agreed with Client upon BlueSky Media receiving initial payment, unless a delay is specifically requested by the Client and agreed by BlueSky Media.</p>
<p>In return, the Client agrees to delegate a single individual as a primary contact to aid BlueSky Media with progressing the commission in a satisfactory and expedient manner.</p>
<p>During the project, BlueSky Media will require the Client to provide website content; text, images, movies and sound files.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">7. Failure to provide required website content</p>
<p>BlueSky Media is a small business, to remain efficient we must ensure that work we have programmed is carried out at the scheduled time. On occasions we may have to reject offers for other work and enquiries to ensure that your work is completed at the time arranged.</p>
<p>This is why we ask that you provide all the required information in advance. On any occasion where progress cannot be made with your website because we have not been given the required information in the agreed time frame, and we are delayed as result, we reserve the right to impose a surcharge.</p>
<p>If you agree to provide us with the required information and subsequently fail to do within two weeks of project commencement we reserve the right to close the project and the balance remaining becomes payable immediately.</p>
<p>Note: Text content should be delivered as a Microsoft Word, email (or similar) document with the pages in the supplied document representing the content of the relevant pages on your website.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">8. Web Browsers</p>
<p>BlueSky Media makes every effort to ensure websites are designed to be viewed by the majority of visitors. Websites are designed to work with the most popular current browsers (e.g. Firefox, Internet Explorer, Google Chrome, etc.). Client agrees that BlueSky Media cannot guarantee correct functionality with all browser software across different operating systems.</p>
<p>BlueSky Media cannot accept responsibility for web pages which do not display acceptably in new versions of browsers released after the website have been designed and handed over to the Client. As such, BlueSky Media reserves the right to quote for any work involved in changing the website design or website code for it to work with updated browser software.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">9. Websites</p>
<p>A. Design</p>
<p>The design of Client’s websites shall be in substantial conformity with the material provided to BlueSky by Client. BlueSky shall develop Client’s websites to project the highest professional image. BlueSky shall not include any of the following in the websites or in Client’s directory on Client’s web server: text, graphics, sound, or animations that might be viewed as offensive or related in any way to sex or any illegal activities; links to other sites that might be viewed as offensive or related in any way to sex or any illegal activities; impressionistic or cartoon-like graphics (unless provided by Client); invisible text, text that is present only when a “web crawler” or other web indexing tool accesses the website, or any other type of hidden text, hidden information, hidden graphics, or other hidden materials; or destructive elements or destructive programming of any type.</p>
<p>B. Materials Provided by Client</p>
<p>All materials to be supplied by Client may be provided on floppy disks, 100 megabyte ZIP cartridges or via File Transfer Protocol (“FTP”). Files will be provided in HTML format, standard word processing Text format or, if images, as TIFF’s, GIFF’S, JPEG’s, PDF's, Photoshop PSD, Adobe XD, Figma. Client also may elect to grant BlueSky access to any list-making applications such as Asana, Jira or Trello in order for BlueSky to manage ongoing projects.</p>
<p>C.	Accessibility Of Website During Construction</p>
<p>Throughout the construction of the prototype and the final website, the website shall be accessible to Client. Until Client has approved the final website, none of the web pages for Client’s websites will be accessible to end users unless the end users have entered the correct user id and password.</p>
<p>D.	Delivery of Deliverables </p>
<p>Upon Client’s approval of its final website, or upon termination of this Agreement, whichever occurs earlier, BlueSky shall deliver to Client all Code, Documentation, reports and other materials developed by BlueSky in the course of its performance under this Agreement and any other items reasonably necessary for the operation of Client’s websites (other than third party operating system software, third party networking software, Web Browsers and hardware) and all changes and enhancements thereto (the “Deliverables”). Documentation shall be delivered in printed format and/or in electronic format. Code shall be delivered in electronic format. The transfer of electronic materials shall be accomplished by copying them to floppy disks, 100 megabyte ZIP cartridges or via File Transfer Protocol (“FTP”). Files will be provided in HTML format, standard word processing Text format or, if images, as TIFF’s GIFF’S, JPEG’s or Photoshop files. BlueSky shall maintain its back-ups and one set of the final materials provided to Client for a period of six months after Client’s approval of its final website. If this Agreement is terminated prior to final approval, or at the expiration of the Initial Term, BlueSky will destroy all of its copies of Client’s websites (including all back-ups thereof) and “wipe” all files constituting final or working copies of Client’s websites (other than the final copy hosted on BlueSky’s web servers and one backup copy thereof) from BlueSky’s computers and back-up materials unless otherwise directed in writing by Client.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">10. Website Hosting</p>
<p>A. Server Hosting</p>
<p>BlueSky agrees, at Client’s option, to maintain Client’s websites on BlueSky’s web server on a month-to-month basis, and to make maintenance modifications to Client’s websites from time to time in accordance with Client’s directions. Such modifications shall be implemented within five (5) business days of BlueSky’s receipt of Client’s changes if the changes are easily implemented, and within ten (10) business days of BlueSky’s receipt of Client’s changes if the changes are not easily implemented. As part of this service, BlueSky agrees to make Client’s websites available to internet users approximately 24 hours per day, to back-up Client’s websites at least once every two weeks, and to store said back-up materials in a safe and secure environment, fit for the back-up media.</p>
<p>B.	Back-Up Copies</p>
<p>Upon notice from Client not more often than once each month, and also in the event of Client’s termination of its use of BlueSky’s web server as the host for Client’s websites, BlueSky agrees to transfer a complete copy of Client’s then-current websites, including all Code therefor, to Client, said transfer to occur by either copying them to floppy disks, 100 megabyte ZIP cartridges or via File Transfer Protocol (“FTP”). Files will be provided in HTML format, standard word processing Text format or, if images, as TIFF’s GIFF’S, JPEG’s or Photoshop files. The transfer method will be selected by COMPANY in its discretion no later than 24 hours before the time the transfer is to take place. in the event such transfer results from Client’s termination of its use of BlueSky’s web server as the host for Client’s websites, BlueSky shall maintain one complete electronic version of Client’s websites, including all Code therefor (and shall “ wipe” all other versions thereof off of its computers and media, including back-up copies), until Client informs BlueSky in writing that the transferred files appear to be complete, at which time BlueSky shall “wipe” its final copy of Client’s websites off of its computers and media. </p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">11. Termination</p>
<p>A. Termination In General</p>
<p>This Agreement shall continue for the term(s) set forth in the proposal(s) and addendum(s), provided that either party may terminate the agreement at any time, upon thirty (30) days prior written notice. Upon termination, Client will pay all amounts then due and owing as of the termination date within seven days as set forth in the proposal(s) and addendum(s).</p>
<p>B. Termination for Material Breach</p>
<p>Except as stated otherwise herein, the parties may terminate this Agreement at any time if the other party materially breaches its obligations hereunder where such material breach is not cured within five (5) days after receipt of written notice from the non-breaching party. Either party’s failure to provide written notice of a material breach of this Agreement shall not constitute a waiver of the party’s right to assert the material breach in the future.</p>
<p>C. Effect of Termination or Expiration</p>
<p>Upon termination or expiration of this Agreement for any reason: (a) any and all licenses or rights granted to either party in connection with this Agreement shall immediately terminate; and (b) any and all Confidential Information or proprietary information of either party that is in the other party's possession or control, including PII, must be immediately returned or destroyed.</p>
<p>D. Custom Material</p>
<p>Upon termination or expiration of this Agreement, Client will remain liable to BlueSky for amounts due for any custom content or development (“Custom Material”) provided to Client or completed by BlueSky or a third-party vendor prior to the effective date of termination. For addendums that contemplate the provision or creation of Custom Material, BlueSky will specify the amounts due for such Custom Material as a separate line item. Client will pay for such Custom Material within seven (7) days from receiving an invoice.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">12. Non-Disclosure, Non-Solicitation &amp; Non-Circumvention</p>
<p>A. Client recognizes that BlueSky has proprietary relationships with its Partners. Client agrees not to knowingly circumvent BlueSky’s relationships, or otherwise obtain, directly or indirectly, services similar to those performed by BlueSky or such Partners hereunder, from any Partner that is known, or should reasonably be known, by Client to have such a relationship with BlueSky. </p>
<p>B.	Client agrees not to solicit or recruit, directly or indirectly, any of BlueSky’s Partners or Employees in relation to Client’s personal use. Client shall not use or attempt to use reverse engineering or tracing of BlueSky’s Partner relationships as a means to solicit and/or identify BlueSky’s existing Partner relationships.</p>
<p>C.	This Section shall survive the termination of this Agreement. Client agrees that, should Client solicit any Partners or Employees through Client’s engagements with BlueSky, Client must pay BlueSky the full amount owed under this Agreement as if BlueSky had fully performed.</p>
<p>D.	Failure to comply with this Section may, at BlueSky’s discretion and without limiting or excluding other remedies that may be available to BlueSky (all such other remedies being expressly reserved), result in immediate termination of the Agreement. The Limitation of Liability Section contained in this agreement shall not limit any causes of action that BlueSky may have for breach of this Section.</p>
<p>E.	Both Client and BlueSky mutually agree to adhere to the previously signed document “Non-Disclosure, Non-Circumvention, and Non-Disparagement Agreement”.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">13. Force Majeure</p>
<p>A.	In General</p>
<p>Excluding payment obligations, neither party will be liable for delay or default in the performance of its respective obligations under this Agreement if such delay or default is caused by conditions beyond its reasonable control, including, but not limited to, fire, flood, accident, earthquakes, telecommunications line failures, electrical outages, network failures, acts of God, or labor disputes (<b>“Force Majeure event”</b>).</p>
<p>  i.	<u>As to BlueSky.</u> BlueSky will make reasonable efforts within seven business days of learning of the Force Majeure event to recommend a substitute transmission for its services. If no such substitute time period or makegood is reasonably acceptable to Client, BlueSky will allow Client a pro rata reduction in the space, time, and/or program charges hereunder in the amount of money assigned to the space, time, and/or program charges at time of purchase.</p>
<p>  ii.	<u>As to Client.</u> If Client’s ability to transfer funds to BlueSky has been materially negatively impacted by an event beyond the Client’s reasonable control, including, but not limited to, failure of banking clearing systems or a state of emergency, then Client will make every reasonable effort to make payments on a timely basis to BlueSky, but any delays caused by such condition will be excused for the duration of such condition.</p>
<p>B.	Payment Obligations</p>
<p>Subject to the foregoing, such excuse for delay will not in any way relieve Client from any of its obligations as to the amount of money that would have been due and paid without such condition.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">14. No Agency</p>
<p>A.	Independent Contractor</p>
<p>BlueSky, in rendering performance under this Agreement, shall be deemed an independent contractor and nothing contained herein shall constitute this arrangement to be employment, a joint venture, or a partnership. BlueSky shall be solely responsible for and shall hold Client harmless for any and all claims for taxes, fees, or costs, including but not limited to withholding, income tax, FICA, and workmen’s compensation.</p>
<p>B.	No Agency</p>
<p>Client does not undertake by this Agreement or otherwise to perform any obligation of BlueSky, whether by regulation or contract. In no way is BlueSky to be construed as the agent or to be acting as the agent of Client in any respect, any other provisions of this Agreement notwithstanding.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">15. Indemnification</p>
<p>A.	Client agrees to defend, indemnify and hold harmless BlueSky and its Partners and their respective directors, officers, employees and agents from and against any and all damages, liabilities, costs and expenses (including reasonable attorneys‘ fees) (collectively "Losses") incurred as a result of any claim, judgment or proceeding relating to or arising out of: (a) Client‘s breach of the Agreement; (b) the content of the websites and any and all claims made therein; or (c) the products, services or content linked to from the websites.</p>
<p>B.	BlueSky agrees to defend, indemnify and hold harmless Client from and against any and all Losses incurred as a result of a claim, judgment or proceeding relating to or arising out of BlueSky‘s breach of the Agreement.</p>
<p>C.	If any action is brought against either party (the "Indemnified Party") in respect to any allegation for which indemnity may be sought from the other party ("Indemnifying Party"), the Indemnified Party will promptly notify the Indemnifying Party of any such claim of which it becomes aware and will: (i) provide reasonable cooperation to the Indemnifying Party at the Indemnifying Party‘s expense in connection with the defense or settlement of any such claim; and (ii) be entitled to participate at its own expense in the defense of any such claim. The Indemnified Party agrees that the Indemnifying Party will have sole and exclusive control over the defense and settlement of any such third-party claim. However, the Indemnifying Party will not acquiesce to any judgment or enter into any settlement that adversely affects the Indemnified Party‘s rights or interests without the prior written consent of the Indemnified Party.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">16. Limitation of Liability</p>
<p>A.	Excluding Client’s and BlueSky’s respective obligations under Sections 13 and 15, damages that result from a material breach of Sections 12, 17-19, or intentional misconduct by Client or BlueSky, in no event or any part will be liable for any consequential, indirect, incidental, punitive, special, or exemplary damages whatsoever, including, but not limited to, damages for loss of profits, business interruption, loss of information, and the like, incurred by another party arising out of an addendum, even if such party has been advised of the possibility of such damages.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">17. Use of Data</p>
<p>A.	By Client</p>
<p>Client acknowledges that, in the course of working with BlueSky, it may have access to data and information regarding team management platforms (such as Trello, Asana, and the like) websites and end-users. Client agrees that such data will be used solely in connection with the Client’s use and will be treated as the Confidential Information of BlueSky.</p>
<p>B.	By BlueSky</p>
<p>BlueSky may use and disclose data derived from Client (a) as part of BlueSky’s business operations, on an aggregate basis (absent Client’s prior consent) such that any use or disclosure does not permit a third party to associate any particular data with Client; and (b) if required by court order, law, or governmental agency. In addition, BlueSky may use data derived from Client to operate, manage, maintain, and improve it processes.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">18.	Data Privacy</p>
<p>A.	Client and BlueSky will post on their respective websites their privacy policies and adhere to such privacy policies, which will abide by applicable laws. Failure by Client to continue to post a privacy policy, or non-adherence to such privacy policy, is a material breach of this Agreement and is grounds for immediate cancellation, including any addendum, by BlueSky.</p>
<p>B.	Compliance with Law</p>
<p>Client and BlueSky will at all times comply with all federal, state, and local laws, ordinances, regulations, and codes which are applicable to performance of their respective obligations under this Agreement and the IO.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">19. Representations and Warranties</p>
<p>A.	No Conflict</p>
<p>BlueSky represents and warrants that it is under no obligation or restriction that would in any way interfere or conflict with the work to be performed by BlueSky under this Agreement. Client understands that BlueSky is currently working on one or more similar projects for other clients. Provided that those projects do not interfere or conflict with BlueSky’s obligations under this Agreement, those projects shall not constitute a violation of this provision of the Agreement. </p>
<p>B.	Ownership Rights</p>
<p>BlueSky represents and warrants that (1) it is and will be the sole author of all works employed by BlueSky in preparing any and all Deliverables other than Preexisting Works; (2) it has and will have full and sufficient right to assign or grant the rights and/or licenses granted in the Deliverables pursuant to this Agreement; (3) all Deliverables other than Preexisting Works have not been and will not be published under circumstances that would cause a loss of copyright therein; and (4) all Deliverables, including all Preexisting Works, do not and will not infringe any patents, copyrights, trademarks, or other intellectual property rights (including trade secrets), privacy or similar rights of any person or entity, nor has any claim (whether or not embodied in an action, past or present) of such infringement been threatened or asserted, nor is such a claim pending against BlueSky (or, insofar as BlueSky is aware, against any entity from which BlueSky has obtained such rights).</p>
<p>C.	Conformity, Performance, and Compliance</p>
<p>BlueSky represents and warrants that (1) all Deliverables shall be prepared in a workmanlike manner and with professional diligence and skill; (2) all Deliverables will function under standard HTML 3 conventions; (3) all Deliverables will conform to the specifications and functions set forth in this Agreement; and (4) BlueSky will perform all work called for by this Agreement in compliance with applicable laws. BlueSky will repair any Deliverable that does not meet this warranty within a reasonable period of time if the defect affects the usability of Client’s website, and otherwise will repair the defect within 24 hours, said repairs to be free of charge to Client. This warranty shall extend for the life of this Agreement. This warranty does not cover links that change over time, pages that become obsolete over time, content that becomes outdated over time, or other changes that do not result from any error on the part of BlueSky.</p>
<p>D.	Mutual Representations, Warranties and Covenants</p>
<p>Each party represents and warrants to the other party that: (a) it has the full right, power and authority to enter into this Agreement on behalf of itself and to undertake to perform the acts required of it by this Agreement; (b) the execution of this Agreement by such party, and the performance by such party of its binding obligations and duties to the extent set forth herein, do not and will not violate any agreement to which it is a party or by which it is otherwise bound; and (c) when executed and delivered by such party, this Agreement will constitute a legal, valid and binding obligation of such party, enforceable against such party in accordance with its representations, warranties, terms and conditions.</p>
<p>E.	Compliance</p>
<p>  i.	<u>Compliance with Applicable Law, Regulation, or other Judicial or Administrative Order, or with BlueSky’s Policies.</u> BlueSky reserves the right, within its sole discretion, to reject or remove from its servers any websites for which the advertising materials, software code associated with the advertising materials (e.g. pixels, tags, JavaScript), or the website to which any ads are linked do not comply with its policies, or that in BlueSky’s sole reasonable judgment, do not comply with any applicable law, regulation, or other judicial or administrative order, or infringe on any copyrights, trademarks, trade dress, service marks or right of publicity or privacy.</p>
<p>  <u>ii.	Compliance that May Bring Disparagement, Ridicule, or Scorn to BlueSky or its Partners.</u> BlueSky reserves the right, within its sole discretion, to reject or remove from its servers any website for which the contents or the website to which and advertisements are linked are, or may tend to bring, disparagement, ridicule, or scorn upon BlueSky or any of its Affiliates.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">20. Assignments</p>
<p>A.	Client agrees not to resell, assign or transfer any of its rights or obligations hereunder. Any attempt to resell, assign, or transfer such rights or obligations without BlueSky’s prior written approval will be null and void. This Agreement and each addendum will be binding upon and inure to the benefit of the parties hereto and their respective permitted transferees, successors, and assigns.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">21. Entire Agreement</p>
<p>A.	This Agreement, applicable addendums and BlueSky Policies stated as incorporated by reference herein, constitutes the entire agreement of the parties with respect to the subject matter thereof and supersede all previous communications, representations, understandings, and agreements, either oral or written, between the parties with respect to the subject matter of the Agreement.</p>
<p>B.	This Agreement may be executed in counterparts, each of which will be an original, and all of which together will constitute one and the same document.</p>
<p>C.	The parties have not relied on any promise, representation, guarantee or warranty, express or implied, not contained in this Agreement.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">22. Mediation and Arbitration</p>
<p>A.	Any dispute concerning this Agreement, if it cannot be settled through direct negotiation, shall first be submitted to confidential mediation in San Juan, Puerto Rico.</p>
<p>B.	All claims arising out of or relating to this Agreement shall be submitted to and finally resolved by confidential arbitration under the rules of the American Arbitration Association then in effect. All arbitration will take place in San Juan, Puerto Rico.</p>
<p>C.	Any litigation to confirm, enforce or challenge an arbitrator’s award shall be conducted in San Juan, Puerto Rico.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">23. Governing Law &amp; Jurisdiction</p>
<p>A.	The laws of the Territory of Puerto Rico will govern all legal proceedings brought in connection with this Agreement, regardless of any conflict of law provisions. By accepting this Agreement all parties acknowledge and consent to such jurisdiction.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">24. Severability</p>
<p>A.	If any provision herein is held to be unenforceable, the remaining provisions will remain in full force and effect. All rights and remedies hereunder are cumulative.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">25. Notice</p>
<p>A.	Any notice required to be delivered hereunder will be deemed delivered three days after deposit, postage paid, in U.S. mail, return receipt requested, one business day if sent by overnight courier service, and immediately if sent electronically or by fax. All notices to BlueSky, and Client must be sent to the contact information stated in this Agreement.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">26. Survival</p>
<p>A.	Sections 4, 12, 13, 15 through 25, and 29 will survive termination or expiration of this Agreement.</p>
<p>B.	Each party will promptly return or destroy the other party’s Confidential Information upon termination of this Agreement. Under no circumstances shall a party retain a copy of the other party’s confidential information after termination of this agreement.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">27. Headings</p>
<p>A.	The section and paragraph headings used in this Agreement are for reference purposes only, and should not be used in the interpretation hereof.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">28. Acknowledgment</p>
<p>A.	Client acknowledges that they have read, understood, and, if applicable, consulted independent counsel for clarification, of BlueSky’s Policies incorporated by reference herein.</p>
<hr class="no_line" style="margin: 0 auto 30px auto">

<p class="pp-hdr">29. Relationship of the Parties</p>
<p>A.	Each party to this Agreement is an independent contractor in relation to the other party with respect to all matters arising under this Agreement. Nothing herein shall be deemed to establish a partnership, joint venture, association or employment relationship between the parties.</p>`

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
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
          TERMS & CONDITIONS{' '}
          <Text
            display={{ base: 'inline-block', lg: 'inline' }}
            fontSize={[16, 18, 24]}
            fontWeight={600}
            color="black"
            mt={5}
          >
            OUR AGREEMENTS
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

export default Terms
