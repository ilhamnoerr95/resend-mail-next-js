import React from "react";

interface Props {
	testProps: string;
}

const About: React.FC<Props> = (props) => {
	const { testProps } = props;
	return <div>ID CLIEND ABOUT COMPONENTS = {testProps}</div>;
};

export default About;
