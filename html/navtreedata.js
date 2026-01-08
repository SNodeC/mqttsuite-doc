/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "MQTTSuite", "index.html", [
    [ "Overview", "index.html#overview", [
      [ "License", "index.html#license", null ],
      [ "Copyright", "index.html#copyright", null ]
    ] ],
    [ "Table of Content", "index.html#table-of-content", null ],
    [ "Installation", "index.html#installation", [
      [ "Supported Systems &amp; Hardware", "index.html#supported-systems--hardware", null ],
      [ "Minimum Required Compiler Versions", "index.html#minimum-required-compiler-versions", null ],
      [ "Requirements &amp; Dependencies", "index.html#requirements--dependencies", [
        [ "Tools", "index.html#tools", [
          [ "Mandatory", "index.html#mandatory", null ],
          [ "Optional (useful for development/QA)", "index.html#optional-useful-for-developmentqa", null ]
        ] ],
        [ "Mandatory Libraries and Frameworks", "index.html#mandatory-libraries-and-frameworks", [
          [ "Frameworks", "index.html#frameworks", null ],
          [ "Libraries", "index.html#libraries", null ]
        ] ],
        [ "Bundled (no separate installation required)", "index.html#bundled-no-separate-installation-required", null ]
      ] ],
      [ "Installation on Debian-Style Systems (x86-64, ARM)", "index.html#installation-on-debian-style-systems-x86-64-arm", [
        [ "Install SNode.C", "index.html#install-snodec", null ],
        [ "Install system packages", "index.html#install-system-packages", null ],
        [ "Build &amp; Install MQTTSuite", "index.html#build--install-mqttsuite", null ]
      ] ],
      [ "Deployment on OpenWrt", "index.html#deployment-on-openwrt", [
        [ "Choose &amp; download an SDK", "index.html#choose--download-an-sdk", null ],
        [ "Patch the SDK to integrate the SNode.C feed", "index.html#patch-the-sdk-to-integrate-the-snodec-feed", null ],
        [ "Install the MQTTSuite package definition and its dependencies", "index.html#install-the-mqttsuite-package-definition-and-its-dependencies", null ],
        [ "Configure the SDK", "index.html#configure-the-sdk", null ],
        [ "Cross-compile MQTTSuite", "index.html#cross-compile-mqttsuite", null ],
        [ "Deploy MQTTSuite", "index.html#deploy-mqttsuite", null ]
      ] ],
      [ "Post-Install Tips", "index.html#post-install-tips", null ]
    ] ],
    [ "MQTTBroker", "index.html#mqttbroker", [
      [ "Connection instances of default builds of <em>MQTTBroker</em>", "index.html#connection-instances-of-default-builds-of-mqttbroker", null ],
      [ "Configuration", "index.html#configuration", null ],
      [ "Notes", "index.html#notes", null ],
      [ "Quick Start (Recommended Flow)", "index.html#quick-start-recommended-flow", [
        [ "Disable all but the <span class=\"tt\">in-mqtt</span> instance", "index.html#disable-all-but-the-in-mqtt-instance", null ],
        [ "Start a plain MQTT listener on TCP/IPv4", "index.html#start-a-plain-mqtt-listener-on-tcpipv4", null ],
        [ "Add a persistent session store (survives restarts)", "index.html#add-a-persistent-session-store-survives-restarts", null ],
        [ "Enable the Web Interface (HTTP)", "index.html#enable-the-web-interface-http", null ],
        [ "Persist your configuration using <span class=\"tt\">-w</span> (so you don’t repeat flags)", "index.html#persist-your-configuration-using--w-so-you-dont-repeat-flags", null ],
        [ "(Optional) Embed the integrator (after the configuration has been saved)", "index.html#optional-embed-the-integrator--after-the-configuration-has-been-saved", null ],
        [ "(For development only) Use custom HTML templates for the Web UI (after the configuration has been saved)", "index.html#for-development-only-use-custom-html-templates-for-the-web-ui-after-the-configuration-has-been-saved", null ]
      ] ],
      [ "Supported Transports", "index.html#supported-transports", [
        [ "MQTT over TCP/IP", "index.html#mqtt-over-tcpip", null ],
        [ "MQTT over UNIX Domain Sockets", "index.html#mqtt-over-unix-domain-sockets", null ],
        [ "MQTT over WebSockets", "index.html#mqtt-over-websockets", null ],
        [ "MQTT over UNIX Domain WebSockets", "index.html#mqtt-over-unix-domain-websockets", null ]
      ] ],
      [ "Web Interface", "index.html#web-interface", [
        [ "Web Interface over TCP/IP", "index.html#web-interface-over-tcpip", null ],
        [ "Web Interface over UNIX Domain Sockets", "index.html#web-interface-over-unix-domain-sockets", null ]
      ] ],
      [ "Additions &amp; Field-Tested Guidance", "index.html#additions--field-tested-guidance", [
        [ "Quick TLS checklist for MQTT(TCP) and MQTT over WebSockets", "index.html#quick-tls-checklist-for-mqtttcp-and-mqtt-over-websockets", [
          [ "Example (TCP/TLS):", "index.html#example-tcptls", null ],
          [ "Example (WebSockets/TLS):", "index.html#example-websocketstls", null ]
        ] ],
        [ "Making configuration persistent (recommended)", "index.html#making-configuration-persistent-recommended", null ],
        [ "WebSockets specifics that often trip clients", "index.html#websockets-specifics-that-often-trip-clients", null ],
        [ "Quick sanity checks with common tools", "index.html#quick-sanity-checks-with-common-tools", null ],
        [ "Quick sanity checks with MQTTSuites command line tool", "index.html#quick-sanity-checks-with-mqttsuites-command-line-tool", null ],
        [ "Notes for UNIX domain sockets", "index.html#notes-for-unix-domain-sockets", null ],
        [ "Embedded MQTTIntegrator (when <span class=\"tt\">--mqtt-mapping-file</span> is provided)", "index.html#embedded-mqttintegrator-when---mqtt-mapping-file-is-provided", null ],
        [ "Extending transports", "index.html#extending-transports", null ],
        [ "Diagnostics, hardening &amp; tips", "index.html#diagnostics-hardening--tips", null ]
      ] ],
      [ "Protocol version note", "index.html#protocol-version-note", null ],
      [ "Why this layout works well in production", "index.html#why-this-layout-works-well-in-production", null ]
    ] ],
    [ "MQTT Mapping Description", "index.html#mqtt-mapping-description", [
      [ "Purpose", "index.html#purpose", null ],
      [ "Top-Level Structure", "index.html#top-level-structure", [
        [ "<span class=\"tt\">connection</span> options (summary)", "index.html#connection-options-summary", null ],
        [ "The <span class=\"tt\">mapping</span> Object (big picture)", "index.html#the-mapping-object-big-picture", [
          [ "Minimal shapes", "index.html#minimal-shapes", null ],
          [ "Wildcard examples", "index.html#wildcard-examples", null ],
          [ "A more complex hierarchy", "index.html#a-more-complex-hierarchy", null ]
        ] ]
      ] ],
      [ "Subscriptions &amp; Translation Rules", "index.html#subscriptions--translation-rules", null ],
      [ "Mapping Sections", "index.html#mapping-sections", [
        [ "<span class=\"tt\">static</span> mapping", "index.html#static-mapping", null ],
        [ "<span class=\"tt\">value</span> mapping (template, scalar)", "index.html#value-mapping-template-scalar", null ],
        [ "<span class=\"tt\">json</span> mapping (template, object)", "index.html#json-mapping-template-object", [
          [ "Example input", "index.html#example-input", null ],
          [ "Rendered output → <span class=\"tt\">5 to 11pm</span>", "index.html#rendered-output--5-to-11pm", null ]
        ] ],
        [ "Template extras", "index.html#template-extras", null ]
      ] ],
      [ "Optional: <span class=\"tt\">plugins</span>", "index.html#optional-plugins", null ],
      [ "Quick Start (Recommended Flow)", "index.html#quick-start-recommended-flow-1", [
        [ "Skeleton mapping file", "index.html#skeleton-mapping-file", null ],
        [ "Add a concrete subscription with a simple static mapping", "index.html#add-a-concrete-subscription-with-a-simple-static-mapping", null ],
        [ "Switch to a template mapping when you need logic", "index.html#switch-to-a-template-mapping-when-you-need-logic", null ],
        [ "Validate against the schema (example with <span class=\"tt\">ajv-cli</span>)", "index.html#validate-against-the-schema-example-with-ajv-cli", null ],
        [ "Run the integrator with your mapping", "index.html#run-the-integrator-with-your-mapping", null ]
      ] ],
      [ "Field-Tested Guidance", "index.html#field-tested-guidance", null ],
      [ "Schema Highlights", "index.html#schema-highlights", null ],
      [ "In one sentence", "index.html#in-one-sentence", null ]
    ] ],
    [ "MQTTIntegrator", "index.html#mqttintegrator", [
      [ "Connection instances of default builds of <em>MQTTIntegrator</em>", "index.html#connection-instances-of-default-builds-of-mqttintegrator", null ],
      [ "Configuration", "index.html#configuration-1", null ],
      [ "Notes", "index.html#notes-1", null ],
      [ "Quick Start (Recommended Flow)", "index.html#quick-start-recommended-flow-2", [
        [ "Disable all but the <span class=\"tt\">in-mqtt</span> instance", "index.html#disable-all-but-the-in-mqtt-instance-1", null ],
        [ "Connect to a plain MQTT broker over TCP/IPv4", "index.html#connect-to-a-plain-mqtt-broker-over-tcpipv4", null ],
        [ "Add a persistent session store (survives restarts)", "index.html#add-a-persistent-session-store-survives-restarts-1", null ],
        [ "Attach your mapping file (canonical test case below)", "index.html#attach-your-mapping-file-canonical-test-case-below", null ],
        [ "Persist your configuration using <span class=\"tt\">-w</span>", "index.html#persist-your-configuration-using--w", null ],
        [ "(Optional) Use TLS (MQTTS) instead of plain TCP", "index.html#optional-use-tls-mqtts-instead-of-plain-tcp", null ],
        [ "(Optional) Use WebSockets (WSS)", "index.html#optional-use-websockets-wss", null ],
        [ "(Optional) Use Unix Domain WebSockets", "index.html#optional-use-unix-domain-websockets", null ]
      ] ],
      [ "Supported Transports", "index.html#supported-transports-1", [
        [ "MQTT over TCP/IP", "index.html#mqtt-over-tcpip-1", null ],
        [ "MQTT over UNIX Domain Sockets", "index.html#mqtt-over-unix-domain-sockets-1", null ],
        [ "MQTT over WebSockets", "index.html#mqtt-over-websockets-1", null ],
        [ "MQTT over UNIX Domain WebSockets", "index.html#mqtt-over-unix-domain-websockets-1", null ],
        [ "Notes", "index.html#notes-2", null ]
      ] ],
      [ "Canonical Mapping &amp; Test Case", "index.html#canonical-mapping--test-case", [
        [ "Save as <span class=\"tt\">~/mapping-example.json</span>:", "index.html#save-as-mapping-examplejson", null ],
        [ "Run the integrator for this mapping (in-mqtt):", "index.html#run-the-integrator-for-this-mapping-in-mqtt", null ],
        [ "Persist once:", "index.html#persist-once", null ],
        [ "Then just run", "index.html#then-just-run", null ],
        [ "Verification", "index.html#verification", null ]
      ] ],
      [ "Behavior aligned with the Mapping Description", "index.html#behavior-aligned-with-the-mapping-description", null ],
      [ "Additions &amp; Field-Tested Guidance", "index.html#additions--field-tested-guidance-1", [
        [ "TLS checklist for client connections (MQTTS / WSS / UDS-WSS)", "index.html#tls-checklist-for-client-connections-mqtts--wss--uds-wss", [
          [ "Example (TCP/TLS) with mutual TLS:", "index.html#example-tcptls-with-mutual-tls", null ],
          [ "Example (WebSockets/TLS):", "index.html#example-websocketstls-1", null ],
          [ "Example (Unix Domain WebSockets, TLS layered on the WS endpoint):", "index.html#example-unix-domain-websockets-tls-layered-on-the-ws-endpoint", null ]
        ] ],
        [ "Persist-once workflow (recommended)", "index.html#persist-once-workflow-recommended", null ],
        [ "WebSockets specifics that often trip clients", "index.html#websockets-specifics-that-often-trip-clients-1", null ],
        [ "Diagnostics, hardening &amp; common pitfalls", "index.html#diagnostics-hardening--common-pitfalls", null ]
      ] ],
      [ "Protocol version note", "index.html#protocol-version-note-1", null ],
      [ "Why this layout works well in production", "index.html#why-this-layout-works-well-in-production-1", null ]
    ] ],
    [ "MQTTBridge", "index.html#mqttbridge", [
      [ "Quick Start (Recommended Flow)", "index.html#quick-start-recommended-flow-3", [
        [ "Create a minimal <span class=\"tt\">bridge-config.json</span>", "index.html#create-a-minimal-bridge-configjson", null ],
        [ "Run the bridge:", "index.html#run-the-bridge", null ],
        [ "Verify (example):", "index.html#verify-example", null ]
      ] ],
      [ "Bridge Configuration JSON", "index.html#bridge-configuration-json", [
        [ "Overall Structure (at a glance)", "index.html#overall-structure-at-a-glance", null ],
        [ "Elements in Detail", "index.html#elements-in-detail", [
          [ "Root Object", "index.html#root-object", null ],
          [ "<span class=\"tt\">bridge</span> (each item in <span class=\"tt\">bridges</span>)", "index.html#bridge-each-item-in-bridges", null ],
          [ "<span class=\"tt\">broker</span> (each item in <span class=\"tt\">brokers</span>)", "index.html#broker-each-item-in-brokers", null ],
          [ "<span class=\"tt\">mqtt</span> (client options)", "index.html#mqtt-client-options", null ],
          [ "<span class=\"tt\">topics</span> (subscriptions for a broker)", "index.html#topics-subscriptions-for-a-broker", null ],
          [ "<span class=\"tt\">network</span> (transport selection + addressing)", "index.html#network-transport-selection--addressing", null ]
        ] ]
      ] ],
      [ "Best Practices &amp; Validation Tips", "index.html#best-practices--validation-tips", null ]
    ] ],
    [ "MQTTCli", "index.html#mqttcli", [
      [ "Quick Start (Recommended Flow)", "index.html#quick-start-recommended-flow-4", null ],
      [ "Command Structure", "index.html#command-structure", null ],
      [ "Supported Transports", "index.html#supported-transports-2", [
        [ "MQTT over TCP/IP", "index.html#mqtt-over-tcpip-2", null ],
        [ "MQTT over UNIX Domain Sockets", "index.html#mqtt-over-unix-domain-sockets-2", null ],
        [ "MQTT over WebSockets", "index.html#mqtt-over-websockets-2", null ],
        [ "MQTT over UNIX Domain WebSockets", "index.html#mqtt-over-unix-domain-websockets-2", null ]
      ] ],
      [ "Additions &amp; Field-Tested Guidance", "index.html#additions--field-tested-guidance-2", [
        [ "TLS quick checklist", "index.html#tls-quick-checklist", null ],
        [ "WebSockets specifics", "index.html#websockets-specifics", null ],
        [ "UNIX domain sockets", "index.html#unix-domain-sockets", null ],
        [ "Persist once (optional)", "index.html#persist-once-optional", null ]
      ] ],
      [ "Handy Patterns", "index.html#handy-patterns", null ],
      [ "Notes", "index.html#notes-3", null ]
    ] ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"BridgeStore_8cpp.html",
"classanonymous__namespace_02json-validator_8cpp_03_1_1logical__combination.html#aadc5f55b348e69e83b600375ab3d1f6c",
"classconanfile_1_1JsonSchemaValidatorConan.html#a07e69e30b8cb47ee686a6ab315a4ab16",
"classinja_1_1FunctionStorage.html#ac2639295aca0260ec320e1c71da3e35e",
"classinja_1_1Parser.html#a08f9845245e383ab99e73b200c3cdb5f",
"classjson__validator.html#a48f742fda328ff2dc2de223e9452c4d1",
"classmqtt_1_1mqttbridge_1_1websocket_1_1SubProtocolFactory.html#a843ee73f0182cea879cd45d9e924db8e",
"classnlohmann_1_1json__schema_1_1error__handler.html#a6518c4580b8dd8063000e183f1541650",
"functions_vars_f.html",
"issue-189-default-values_8cpp.html#a4ae6988801f5542ccbfbabda9fc03914",
"namespacemqtt_1_1mqttbridge_1_1websocket.html",
"structinja_1_1Token.html#a2e482ca14ccd167bf744a85c83af14faaf5f286e73bda105e538310b3190f75c5"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';